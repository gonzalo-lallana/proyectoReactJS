import { useContext, useState } from "react"
import { CartContext } from "../../contex/CartContext"
import { Link, Navigate } from "react-router-dom"
import { collection, addDoc } from 'firebase/firestore'
import { dataBase } from "../../firebase/config"

const Checkout = () => {
    const {cart, totalCompra, vaciarCarrito} = useContext(CartContext)

    const [orderId, setOrderId] = useState(null)

    const [values, setValues] = useState({
        nombre: '',
        direccion: '',
        email: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if (values.nombre.length === 0) {
            alert('olvidaste poner tu nombre')
            return
        }

        if (values.direccion.length === 0) {
            alert('olvidaste poner tu direccion')
            return
        }

        if (values.email.length === 0) {
            alert('olvidaste poner tu email')
            return
        }

        const orden = {
            cliente: values,
            items: cart,
            total: totalCompra(),
            fecha: new Date()
        }

        const ordersRef = collection(dataBase, 'orders')
        addDoc(ordersRef, orden)
        .then((doc) => {
            setOrderId(doc.id)
            vaciarCarrito()
        })
        .catch(err => console.log(err))
    }

    const handleInputChange = (e) => {
        console.log(e.target.name)
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    if (orderId) {
        return (
            <div id="checkout" className="container my-5">
                <div id="check">
                    <h2>Tu compra ha sido realizada!!</h2>
                    <hr />
                    <p>El codigo de operacion de tu compra es <span id="brand4">{orderId}</span></p>
                    <Link to={'/'} className="btn btn-primary">volver al inicio</Link>
                </div>
            </div>
        )
    }
    
    if (cart.length === 0) {
        return <Navigate to="/"/>
    }
    
    return (
        <div className="container my-5">
            <h2>checkout</h2>
            <hr />
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="nombre" className="form-control my-2" value={values.nombre} onChange={handleInputChange} name="nombre"/>
                <input type="text" placeholder="direccion" className="form-control my-2" value={values.direccion} onChange={handleInputChange} name="direccion"/>
                <input type="email" placeholder="email" className="form-control my-2" value={values.email} onChange={handleInputChange} name="email"/>
                <button type="submit" className="btn btn-success">Enviar</button>
            </form>
        </div>
    );
}

export default Checkout;