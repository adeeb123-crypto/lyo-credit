import Hero from "./Home";

const { default: Header } = require("./Header");

const Layout = ({children}) => (
    <>
    <Header/>
    <Hero/>
        <main>{children}</main>
        </>
    )

    export default Layout