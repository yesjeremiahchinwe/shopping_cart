import classes from "./footer.module.scss"

export default function Footer() {
    const date = new Date().getFullYear()

    return (
        <footer>
            <div className={classes.container}>
                <p>All Rights Resersed &copy; {date}</p>
                <small>Designed by Jeremiah C.</small>
            </div>
        </footer>
    )
}
