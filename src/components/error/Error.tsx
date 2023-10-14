import classes from "./error.module.scss"

export default function Error() {
  return (
    <div className={classes.container}>
      <p className={classes.error}>😩 Oops!</p>
      <p className={classes.error}>It seems you're offline. Please check your internet connection and try again.</p>

      <form>
        <a href="/" className={classes.button}>Refresh Page</a>
      </form>

    </div>
  )
}
