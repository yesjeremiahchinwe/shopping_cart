import { useNavigate } from 'react-router-dom'
import classes from './cart-widget.module.scss'
import { AiOutlineShoppingCart } from "react-icons/ai"

interface Props {
  productsCount: number
}

export default function CartWidget({ productsCount }: Props) {
  const navigate = useNavigate()

  const navigateToCart = () => {
    navigate('/cart')
  }

  return (
    <div className={classes.container} onClick={navigateToCart}>
      <AiOutlineShoppingCart className={classes.shoppingCart} />
      <div className={`${productsCount && classes.wrapper}`}>
        <span className={classes.productsCount}>{productsCount}</span>
      </div>
    </div>
  )
}
