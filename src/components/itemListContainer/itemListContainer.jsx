import { useState } from 'react';
import { pedirDatos } from '../../helpers/pedirDatos';
import { useEffect } from 'react';
import ProductContainer from '../productContainer/productContainer';
import CarouselContainer from '../carouselContainer/CarouselContainer';
import { useParams, useSearchParams } from 'react-router-dom';


const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    
    const [loading, setLoading] = useState(true)
    const [searchParams] = useSearchParams()
    const search = searchParams.get("search")
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((res) => {
                if (!categoryId) {
                    setProductos(res)
                } else {
                    setProductos( res.filter((item) => item.categoria === categoryId))
                }
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => setLoading(false))
    }, [categoryId])

    const listado = search
                        ? productos.filter(prod => prod.nombre.includes(search))
                        : productos

    return ( 
        <div>
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <div>
                        <div>
                    <CarouselContainer/>
                    </div>
                    <div>
                        <ProductContainer items={listado}></ProductContainer>
                    </div>
                    </div>
                    
            }
        </div>
    );
}

export default ItemListContainer;

