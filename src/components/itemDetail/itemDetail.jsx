import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemCount from "../itemCount/itemCount";

const ItemDetail = ({id, nombre, precio, categoria, descripcion, img, stock}) => {

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
    }

    return ( 
        <div className="container my-4">
            <h2>{nombre}</h2>
            <img src={img} alt={nombre} />
            <p>{descripcion}</p>
            <h4>precio= ${precio}</h4>
            <br />
            <small>categoria: {categoria}</small>
            <ItemCount max={stock} cantidad={cantidad} setCantidad={setCantidad} handleAgregar={handleAgregar}/>
            <hr />
            <button className="btn btn-warning" onClick={handleVolver}>volver</button>
        </div>
    );
}

export default ItemDetail;