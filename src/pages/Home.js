import { Link } from 'react-router-dom'
import ProductList from '../components/ProductList'



const Home = props => {
    return <div >
        <Link to={'/cart'}>cart</Link>
        <ProductList  />
    </div>
}

export default Home