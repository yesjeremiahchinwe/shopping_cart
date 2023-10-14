import classes from "./product.module.scss"
import Error from "../error/Error"
import { LoaderDetails } from "../loader/LoaderDetails"
import CurrencyFormatter from "../currencyFormatter/CurrencyFormatter"
import useFetchProduct, { ProductDetail } from "../../hooks/useFetchProduct"
import { CartProps } from "../products/Products"
import useLocalStorageState from "use-local-storage-state";
import { useEffect } from "react"


export default function ProductPage() {
  const { product, isLoading, error } = useFetchProduct()
  const [cart, setCart] = useLocalStorageState<CartProps>('cart', {})

  useEffect(() => {
    if (isLoading) {
      window.scrollTo({ top: 0, behavior: "auto"})
    }
  }, [isLoading])

  
  const addToCart = (product: ProductDetail) => {
     product.quantity = 1

    setCart((prevCart) => ({
      ...prevCart,
      [product.id]: product,
    }))
  }

  const isInCart = (productId: number): boolean => Object.keys(cart || {}).includes(productId?.toString())

  if (error) <Error />


  return (
    <>
      {isLoading ? <LoaderDetails />
        :
        <section className={classes.productPage}>
          <div className={classes.container}>
            <div className={classes.wrapper}>
              <img src={product?.thumbnail} alt={product?.title} />

              <div className={classes.product_details}>
                <h2>{product?.title}</h2>
                <CurrencyFormatter amount={product?.price} />
                <p className={classes.description}>{product?.description}</p>
                <small><span>Brand:</span> {product?.brand}</small>
                <small><span>Category:</span> {product?.category}</small>
                <small><span>Discount:</span> {product?.discountPercentage}%</small>
                <small><span>Rating:</span> {product?.rating}</small>
                <button 
                disabled={isInCart(Number(product?.id))}
                onClick={() => addToCart(product!)}
                >{!isInCart ? "Add to Cart" : "Added to Cart"}</button>
              </div>
            </div>

            <div className={classes.images}>
              <h3>Related Images</h3>

              <div className={classes.image_wrapper}>
                {product?.images.map(image => (
                  <img
                    src={image}
                    alt={product?.title}
                    key={image}
                    className={classes.image}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      }
    </>
  )
}
