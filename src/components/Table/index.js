import  './style.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faX} from '@fortawesome/free-solid-svg-icons'
/**
 * 
 * @param {{
 * items: [{
 *  id:String
 *  title:String,
 *  price:Number,
 *  quantity:Number
 * }]
 * headings: [String]
 * }} props 
 * @returns 
 */

const Table = props => {

    const deleteHandler = () =>{
        //  some logic to handle deleting

    }


    return <table cellpadding="0" border="0" align="center" cellspacing="0" >
        <tr>
            {props.headings && props.headings.map(item => {
                return <th>
                    {item}
                </th>

            })}
            <th></th>
        </tr>
        {props.items && props.items.map(item => {
            return <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td><FontAwesomeIcon color='#0880AE' cursor={'pointer'} icon={faX} /></td>
            </tr>
        })}
    </table>
}
export default Table
