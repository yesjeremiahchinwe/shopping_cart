import Header from "../../components/header/Header";
import { Outlet } from "react-router-dom"
import classes from "./main.module.scss"
import Footer from "../../components/footer/Footer";


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
