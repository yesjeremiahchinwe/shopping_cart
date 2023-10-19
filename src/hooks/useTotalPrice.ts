import useLocalStorageState from "use-local-storage-state"
import { CartProps } from "../pages/home/Home"

export default function useTotalPrice() {
    const [cart, setCart] = useLocalStorageState<CartProps>('cart', {})
    const getProducts = () => Object.values(cart || {})
    const totalPrice = getProducts().reduce((accumulator, product) => accumulator + (product.price * product.quantity), 0)
    return { totalPrice, setCart, getProducts }
}