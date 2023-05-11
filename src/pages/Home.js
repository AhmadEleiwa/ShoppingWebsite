import Form from "../components/Form"
import ProductList from "../components/ProductList"
import Table from "../components/Table"


const Home = () => {
 
    // const {cart, addProduct,clear,deleteProduct}= useCart()

    
    return <div >


        <Table
         headings={['Title', 'Price', 'Quantity' ]}
         items={[
            {title:"Macbook", price:44,quantity:4},
            {title:"Macbook", price:44,quantity:4},
            {title:"Macbook", price:44,quantity:4},

         ]}
         />
         <Form />
    </div>
}

export default Home