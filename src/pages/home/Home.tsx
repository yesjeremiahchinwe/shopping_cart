import useLocalStorageState from 'use-local-storage-state'
import CurrencyFormatter from '../../components/currencyFormatter/CurrencyFormatter'
import classes from './home.module.scss'
import Loader from '../../components/loader/Loader'
import useFetchProducts from '../../hooks/useFetchProducts'
import Error from '../../components/error/Error'
import { Link } from 'react-router-dom'

export type Product = {
  id: number
  title: string
  price: number
  thumbnail: string
  image: string
  quantity: number,
}

export interface CartProps {
  [productId: string]: Product
}

export default function Products() {
  const { products, error, isLoading } = useFetchProducts()
  const [cart, setCart] = useLocalStorageState<CartProps>('cart', {})

  const addToCart = (product: Product): void => {
    product.quantity = 1

    setCart((prevCart) => ({
      ...prevCart,
      [product.id]: product,
    }))
  }

  const isInCart = (productId: number): boolean => Object.keys(cart || {}).includes(productId.toString())

  if (error) {
    return <Error />
  }


  return (
    <section className={classes.productPage}>
      <h1>Featured Products</h1>

      {isLoading ?
        <Loader />
        : (
          <div className={classes.container}>
            {products.map((product: Product) => (
              <div className={classes.product} key={product.id}>
                <Link to={`/${product.id}`}>
                  <img src={product.thumbnail} alt={product.title} />
                </Link>
                <h3>{product.title}</h3>
                <p>Price: <CurrencyFormatter amount={product.price} /></p>

                  <button
                    disabled={isInCart(product.id)}
                    onClick={() => addToCart(product)}>{!isInCart ? "Add to Cart" : "Added to Cart"}</button>

              </div>
            ))}
          </div>
        )
      }
    </section>
  )
}
