import classes from './loader.module.scss'

export default function Loader() {
  return (
    <div className={classes.loader}>
      <div className={classes.spinner}></div>
      <p>Fetching Products...</p>
    </div>
  )
}
