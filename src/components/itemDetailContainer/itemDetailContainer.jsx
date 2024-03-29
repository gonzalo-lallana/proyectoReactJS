import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../itemDetail/itemDetail";
import { doc, getDoc } from "firebase/firestore";
import { dataBase } from "../../firebase/config";

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)
    console.log(item)
    const {itemId} = useParams()
    
    useEffect(() => {
        setLoading(true)
        
        const itemRef = doc(dataBase, "productos", itemId)
        getDoc(itemRef)
            .then((doc) => {
                setItem({...doc.data(), id: doc.id})
            })
            .catch(e => console.log(e))
            .finally(setLoading(false))

    }, [itemId])


    return ( 
        <div>
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemDetail {...item}/>
            }
        </div>
    );
}

export default ItemDetailContainer;