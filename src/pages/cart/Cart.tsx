import { Link } from 'react-router-dom'
import Quantifier from '../../components/quantifier/Quantifier.tsx'
import { Operation } from '../../components/quantifier/Quantifier.tsx'
import classes from './cart.module.scss'
import CurrencyFormatter from '../../components/currencyFormatter/CurrencyFormatter.tsx'
import OrderSummary from '../../components/orderSummary/OrderSummary.tsx'
import useTotalPrice from '../../hooks/useTotalPrice.ts'


export default function Cart() {
  const { totalPrice, setCart, getProducts } = useTotalPrice()

  const handleRemoveProduct = (productId: number): void => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart }
      delete updatedCart[productId]
      return updatedCart
    })
  }

  const handleUpdateQuantity = (productId: number, operation: Operation) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart }
      if (updatedCart[productId]) {
        if (operation === 'increase') {
          updatedCart[productId] = { ...updatedCart[productId], quantity: updatedCart[productId].quantity + 1 }
        } else {
          updatedCart[productId] = { ...updatedCart[productId], quantity: updatedCart[productId].quantity - 1 }
        }
      }
      return updatedCart
    })
  }


  return (
    <>
      {!totalPrice ?
        <section className={classes.empty_cart}>
          <small>🛒</small>
          <h2>Your Cart is Empty!</h2>
          <span>Selected items will appear here.</span>
          <Link to="/">Start Shopping</Link>
        </section>
        :

        <article className={classes.article_container}>
          <section className={classes.cartPage}>
            <div className={classes.container}>
              <div className={classes.products}>
                {getProducts().map(product => (
                  <div className={classes.wrapper} key={product.id}>
                    <Link to={`/${product.id}`}>
                      <img src={product?.thumbnail} alt={product?.title} />
                    </Link>

                    <div className={classes.product_details}>
                      <h2>{product?.title}</h2>
                      <CurrencyFormatter amount={product.price} />
                      <Quantifier
                        removeProductCallback={() => handleRemoveProduct(product.id)}
                        productId={product.id}
                        handleUpdateQuantity={handleUpdateQuantity}
                      />
                    </div>
                  </div>
                ))}
              </div>

             <OrderSummary total={totalPrice} />
            </div>
          </section>
        </article>
      }
    </>
  )
}

