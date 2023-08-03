import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../contex/CartContext"


const CartWidget = () => {
    const {cart, totalCantidad} = useContext(CartContext)

    return (
        <button className={`carrito ${cart.length > 0 ? 'carrito-activo' : ''}`} bg="dark">
            <Link to="/cart"><img src="../../../img/carrito-de-compras (2).png" alt="imagen de carrito" /></Link>
            <span className="contadorCarrito">{totalCantidad()}</span>
        </button>
    )
}

export default CartWidget