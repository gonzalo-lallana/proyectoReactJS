import { useState } from 'react';
import { pedirDatos } from '../../helpers/pedirDatos';
import { useEffect } from 'react';
import ProductContainer from '../productContainer/productContainer';
import CarouselContainer from '../carouselContainer/CarouselContainer';
import { useParams, useSearchParams } from 'react-router-dom';
import { dataBase } from '../../firebase/config';
import { collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    
    const [loading, setLoading] = useState(true)
    const [searchParams] = useSearchParams()
    const search = searchParams.get("search")
    console.log(productos)
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const productosRef = collection(dataBase, "productos")
        const q = categoryId
            ? query(productosRef, where('categoria', '==', categoryId))
            : productosRef

        getDocs(q)
            .then((resp) => {
                const items = resp.docs.map((doc) => ({...doc.data(), id: doc.id}))
                setProductos(items)
            })
            .catch((e) => console.log(e))
            .finally(()=> setLoading(false))
            
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

