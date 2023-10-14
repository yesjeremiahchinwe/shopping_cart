import classes from './currency-formatter.module.scss'


interface Props {
  amount: number | undefined
}

export default function CurrencyFormatter({ amount }: Props) {
  const formattedAmount = amount?.toLocaleString('en-GB', {
    style: 'currency',
    currency: 'GBP'
  })

  return <span className={classes.currency}>{formattedAmount}</span>
}
