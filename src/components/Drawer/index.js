import { useRef, useEffect } from 'react'
import style from './style.module.css'

/**
 *
 * @param {{
 * isOpen: boolean,
 * children: any
 * }} props 
 * @returns 
 */

const Drawer = props => {
    const drawer = useRef()


    useEffect(() => {
        if (props.isOpen) {
            drawer.current.style.width = '40%'
        } else {
            drawer.current.style.width = '0%'
        }
    }, [props.isOpen])


    return <div
        className={style.drawer}
        ref={drawer}
    >
        {props.children}
    </div>
}

export default Drawer