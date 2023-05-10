import style from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'



/**
 * 
 * @param {{
 * title: String,
 * description: String,
 * Img: String,
 * price: Number
 * }} props 
 * @returns 
 */

const ProductCard = props => {

    const addCartHandler = () => {
        // here the code

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
                <FontAwesomeIcon color='#979797' icon={faCartShopping} />
            </div>
        </div>
    </div>
}

export default ProductCard