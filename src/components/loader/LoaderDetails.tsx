import { FunctionComponent } from 'react'
import classes from './loader.module.scss'

export const LoaderDetails: FunctionComponent = () => (
  <div className={classes.loader}>
      <div className={classes.spinner}></div>
      <p>Fetching Product Details...</p>
  </div>
)