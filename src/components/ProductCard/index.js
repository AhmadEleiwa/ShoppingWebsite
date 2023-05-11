import style from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'



/**
 * 
 * @param {{
 * id:String
 * title: String,
 * description: String,
 * Img: String,
 * price: Number
 * addProduct : ({id,title,description, price})=>{}
 * }} props 
 * @returns 
 */

const ProductCard = props => {

    const addCartHandler = () => {
        props.addProduct({
            id:props.id,
            title:props.title,
            description:props.description,
            price:props.price
        })
    }


    return <div className={style.card}>
        <div className={style.media} >
            <img src={props.Img} alt={props.title} />
        </div>
        <div className={style.body}>
            <div className={style.title}>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
            <div className={style.controls}>
                <p>${props.price}</p>
                <FontAwesomeIcon className={style.cartBtn} onClick={addCartHandler}  icon={faCartShopping} />
            </div>
        </div>
    </div>
}

export default ProductCard