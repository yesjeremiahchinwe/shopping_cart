import { Routes, Route } from "react-router-dom"
import Layout from "./pages/layout/Layout"
import Products from "./pages/home/Home"
import Cart from "./pages/cart/Cart"
import ProductPage from "./pages/product/Product"


function App() {

  return (
  <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<Products />} />
          <Route path="cart" element={<Cart />} />
          <Route path="products" element={<Products />} />
          <Route path="/:id" element={<ProductPage />} />
      </Route>
  </Routes>
  )
}

export default App
