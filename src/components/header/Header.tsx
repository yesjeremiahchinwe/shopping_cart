import { Link } from 'react-router-dom'
import useLocalStorageState from 'use-local-storage-state'
import classes from './header.module.scss'
import { CartProps } from '../../pages/home/Home'
import CartWidget from '../cartWidget/CartWidget'

export default function Header(){
  const [cart] = useLocalStorageState<CartProps>('cart', {})
  const productsCount: number = Object.keys(cart || {}).length

  return (
    <header className={classes.header}>
      <div className={classes.header_container}>
      <div>
        <Link to="/">
          <h3 className={classes.title}>Shopping</h3>
        </Link>
      </div>
      <span>
        <CartWidget productsCount={productsCount} />
      </span>
      </div>
    </header>
  )
}
