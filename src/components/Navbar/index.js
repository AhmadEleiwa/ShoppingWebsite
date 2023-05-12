import { NavLink } from "react-router-dom"
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import img from './Avatar 1.png'
import './style.css'

const Navbar = props =>{
    return <nav>
        <NavLink to={'/cart'}><FontAwesomeIcon icon={faCartShopping} /></NavLink>
        <NavLink to={'/'}><img src={img} alt="avator img"/></NavLink>
    </nav>
}

export default Navbar