import react from "react"
import NavScrollExample from "./NavbarLogin"
import UncontrolledExample from "./carouselLogin"
import Products from "./ProductsLogin"

function Home() {

    return (
        <>
            <UncontrolledExample />
            <NavScrollExample/>
            <Products/>
        </>
    )

}
export default Home