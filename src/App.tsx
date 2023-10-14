import { Routes, Route } from "react-router-dom"
import Layout from "./components/layout/Layout"
import Products from "./components/products/Products"
import Cart from "./components/cart/Cart"
import ProductPage from "./components/product/Product"


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
