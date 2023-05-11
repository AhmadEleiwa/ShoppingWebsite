import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import { CartProvider } from './hooks/useCart';
import CartPage from "./pages/CartPage";



const Router = () => {


    return<CartProvider >

        <BrowserRouter>
            <Routes>
                <Route path="/" index element={<Home />}></Route>
                <Route path="/cart" element={<CartPage />}></Route>

            </Routes>
        </BrowserRouter>
    </CartProvider>
}

export default Router