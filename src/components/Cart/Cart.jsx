import { useContext } from "react";
import { CartContext } from "../../contex/CartContext";
import {BsFillTrashFill} from "react-icons/bs"
import { Link } from "react-router-dom";


const Cart = () => {
    const {cart, totalCompra, vaciarCarrito, eliminarDelCarrito} = useContext(CartContext)
    if (cart.length === 0) {
        return (
            <div className="container my-5">
                <h2>Tu carrito esta vacio</h2>
                <hr />
                <Link className="btn btn-primary" to="/">Volver a la tienda</Link>
            </div>
        )
    }
    return ( 
        <div className="container my-5">
            <h2>Tu compra</h2>
            <hr />
            {
                cart.map((prod) => (
                    <div key={prod.id}>
                        <h4>{prod.nombre}</h4>
                        <img src={prod.img} alt={prod.nombre} style={{ width: '14rem' }}/>
                        <p>Precio: ${prod.precio}</p>
                        <p>Cantidad: {prod.cantidad}</p>
                        <button onClick={() => eliminarDelCarrito(prod.id)} className="btn btn-danger"><BsFillTrashFill></BsFillTrashFill></button>
                        <hr/>
                    </div>
                ))
            }
            <div>
                <h5>Total: ${totalCompra()}</h5>
                <hr />
                <button onClick={vaciarCarrito} className="btn btn-outline-danger">Vaciar el carrito</button>
                <Link to="/" className="btn btn-success mx-2">Seguir comprando</Link>
                <Link to="/checkout" className="btn btn-primary">Finalizar compra</Link>
            </div>
        </div>
    );
}
export default Cart;