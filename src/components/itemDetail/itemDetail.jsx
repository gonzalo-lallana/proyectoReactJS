import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import ItemCount from "../itemCount/itemCount";
import { CartContext } from "../../contex/CartContext";
import { Button } from "react-bootstrap";

const ItemDetail = ({id, nombre, precio, categoria, descripcion, img, stock}) => {
    const {agregarAlCarrito, isInCart} = useContext(CartContext)
    console.log(isInCart(id))

    const [cantidad, setCantidad] = useState(1)
    const navigate = useNavigate()
    const handleVolver = () => {
        navigate(-1)
    }
    const handleAgregar = () => {
        const item = {
            id,
            nombre,
            precio,
            categoria,
            descripcion,
            img,
            stock,
            cantidad
        }
        agregarAlCarrito(item)
    }

    return ( 
        <div className="container my-4">
            <h2>{nombre}</h2>
            <img src={img} alt={nombre} style={{ width: '22rem', height: '24rem' }}/>
            <p>{descripcion}</p>
            <h4>precio= ${precio}</h4>
            <br />
            <small>categoria: {categoria}</small>
            <hr />
            {
                isInCart(id)
                    ? <Button className="btn btn-succes" as={Link} to="/cart">Terminar mi compra</Button>
                    : <ItemCount
                        max={stock}
                        cantidad={cantidad}
                        setCantidad={setCantidad}
                        handleAgregar={handleAgregar}/>
            }
            <hr />
            <button className="btn btn-outline-danger" onClick={handleVolver}>volver</button>
        </div>
    );
}

export default ItemDetail;