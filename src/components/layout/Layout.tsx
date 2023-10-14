import Header from "../header/Header";
import { Outlet } from "react-router-dom"
import classes from "./main.module.scss"
import Footer from "../footer/Footer";


export default function Layout() {
  return (
    <>
        <Header />
        <main className={classes.main}>
            <Outlet />
        </main>
        <Footer />
    </>
  )
}
