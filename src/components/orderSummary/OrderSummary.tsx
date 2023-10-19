import { Link } from "react-router-dom";
import CurrencyFormatter from "../currencyFormatter/CurrencyFormatter";
import classes from "./order.module.scss"

type Props = {
    total: number
}

export default function OrderSummary({ total }: Props) {

    return (
        <div className={classes.order_summary}>
            <h3>Order Summary</h3>
            <div>
                <h4>Order Total</h4>
                <CurrencyFormatter amount={total} />
            </div>
            <button>Checkout</button>
            <button><Link to="/">Add more items</Link></button>
        </div>
    )
}