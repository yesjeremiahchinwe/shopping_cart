import classes from './quantifier.module.scss'
import { useState } from 'react'

export type Operation = 'decrease' | 'increase'

interface Props {
  removeProductCallback: (productId: number) => void
  handleUpdateQuantity: (productId: number, operation: Operation) => void
  productId: number
}


export default function Quantifier({ removeProductCallback, handleUpdateQuantity, productId }: Props) {
  const [value, setValue] = useState<number>(1)
  const reduce = ():void => {
    handleUpdateQuantity(productId, 'decrease')

    setValue(prevState => {
      const updatedValue = prevState - 1
      if (updatedValue === 0) {
        removeProductCallback(productId)
      }
      return updatedValue
    })
  }

  const increase = ():void => {
    handleUpdateQuantity(productId, 'increase')
    setValue(prevState => prevState + 1)
  }

  return (
    <div className={classes.quantifier}>
      <button className={classes.buttonMinus} onClick={reduce}>-</button>
      <button className={classes.quantityField}>{value}</button>
      <button className={classes.buttonPlus} onClick={increase}>+</button>
    </div>
  )
}
