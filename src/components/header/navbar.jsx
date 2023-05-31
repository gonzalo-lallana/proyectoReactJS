import CartWidget from "./cartWidget"

const Navbar = () => {

    return (
        <nav className="navbar">
            <ul className="ul">
                <li className="li"><a href="#">GUANTES</a></li>
                <li className="li"><a href="#">CASCOS</a></li>
                <li className="li"><a href="#">ACCESORIOS</a></li>
                <li className="li"><a href="#">ENTRENAMIENTO</a></li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default Navbar