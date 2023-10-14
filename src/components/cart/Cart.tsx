import { Link } from 'react-router-dom'
import useLocalStorageState from 'use-local-storage-state'
import Quantifier from '../quantifier/Quantifier.tsx'
import { CartProps } from '../products/Products.tsx'
import { Operation } from '../quantifier/Quantifier.tsx'
import classes from './cart.module.scss'
import CurrencyFormatter from '../currencyFormatter/CurrencyFormatter.tsx'


export default function Cart() {
  const [cart, setCart] = useLocalStorageState<CartProps>('cart', {})
  const getProducts = () => Object.values(cart || {})
  const totalPrice = getProducts().reduce((accumulator, product) => accumulator + (product.price * product.quantity), 0)


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

            <div className={classes.order_summary}>
              <h3>Order Summary</h3>
              <div>
                <h4>Order Total</h4>
                <CurrencyFormatter amount={totalPrice} />
              </div>
              <button>Checkout</button>
              <button><Link to="/">Add more items</Link></button>
            </div>

          </div>
        </section>
      }
    </>
  )
}

