import { useState } from 'react'
import style from './style.module.css'

const Form = props => {
    const [formData, setFormData]= useState({name:'', email:''})
    const onInputHandler = event => {
         const name = event.target.name
         const value = event.target.value

         setFormData(prev => {return {...prev, [name]:value }})
    }
    const onSubminHandler = e =>{
        e.preventDefault()
        // some logic her to sned form data and clear cart

    }


    return <div className={style.conformForm}> 
        <form onSubmit={onSubminHandler}>
            <input name='name' className={style.input} onInput={onInputHandler} placeholder='Name' />
            <input name='email' className={style.input} onInput={onInputHandler}  type='email' placeholder='Email' />
            <button className={style.btn}>Conform</button>
        </form>
    </div>
}

export default Form