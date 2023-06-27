
const ItemCount = ({max, cantidad, setCantidad, handleAgregar}) => {
    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }
    const handleSumar = () => {
        cantidad < max && setCantidad(cantidad + 1)
    }
    return ( 
        <div>
            <button onClick={handleRestar} className="btn btn-primary">
                -
                <span className="mx-3">{cantidad}</span>
            </button>
            <br />
            <button onClick={handleSumar} className="btn btn-succes">
                +
                <span className="mx-3">{cantidad}</span>
            </button>
            <button onClick={handleAgregar} className="btn btn-outline-primary my-2">Agregar al Carrito</button>
        </div>
    );
}

export default ItemCount;