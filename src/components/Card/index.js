import style from './style.module.css'

const Card = ({ children, title }) => {
    return <div className={style.card}>
        <div className={style.body}>
            <h2>{title}</h2>
            <p>{children}</p>
        </div>
    </div>
}

export default Card