import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import { CartProvider } from './hooks/useCart';
import CartPage from "./pages/CartPage";
import Layout from "./Layout";



const Router = () => {


    return <CartProvider >
        <BrowserRouter>
            <Routes>
                <Route path="/" index element={
                    <Layout>
                        <Home />
                    </Layout>
                }></Route>
                <Route path="/cart" element={
                    <Layout>
                        <CartPage />
                    </Layout>
                }></Route>

            </Routes>
        </BrowserRouter>
    </CartProvider>
}

export default Router