import { useContext, useState } from 'react'
import style from './style.module.css'
import { CartContext } from '../../hooks/useCart'

const Form = props => {
    const [formData, setFormData]= useState({name:'', email:''})

    const cartContext = useContext(CartContext)

    const onInputHandler = event => {
         const name = event.target.name
         const value = event.target.value

         setFormData(prev => {return {...prev, [name]:value }})
    }
    const onSubminHandler = e =>{
        e.preventDefault()
      
        if(window.confirm("Are you sure") == true){
            cartContext.clear()
            alert("done")
        }


        
    }


    return <div className={style.conformForm}> 
        <form onSubmit={onSubminHandler}>
            <input name='name' className={style.input} required onInput={onInputHandler} placeholder='Name' />
            <input name='email' className={style.input} required onInput={onInputHandler}  type='email' placeholder='Email' />
            <button className={style.btn}>Conform</button>
        </form>
    </div>
}

export default Form