import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../../hooks/useCart'
import { useContext } from 'react'
/**
 * 
 * @param {{
 * headings: [String]
 * }} props 
 * @returns 
 */

const Table = props => {
    const cartContext = useContext(CartContext)

    return <table cellPadding="0" border="0" align="center" cellSpacing="0" >
        <tbody>
        <tr>
            {props.headings && props.headings.map((item,index) => {
                return <th key={index}>
                    {item}
                </th>

            })}
            <th></th>
        </tr>
        {cartContext.data.map(item => {
            return <tr key={item.id}>
                <td>{item.title}</td>
                <td>${item.price}</td>
                <td>{item.quantity}</td>
                <td className='x-icon'>
                    <FontAwesomeIcon color='#0880AE' cursor={'pointer'}
                        onClick={() => { cartContext.deleteProduct(item.id) }}
                        icon={faX} />
                </td>
            </tr>
        })}
        </tbody>
    </table>
}
export default Table
