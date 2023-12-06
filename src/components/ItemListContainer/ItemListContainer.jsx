import React, { useEffect, useState } from "react";
import { pedirProductos } from '../../helpers/pedirProductos';
import './style.css'
import {useParams} from 'react-router-dom';
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () => {

    const [loading, setLoading] = useState(false);

    const [items, setItems] = useState([]);
    
    const {categoryId} = useParams();
    
    
    useEffect(() => {
        setLoading(true)
        pedirProductos()
            .then((res) => {
                if(categoryId){
                    setItems(res.filter(prod => prod.category === categoryId))
                }else{
                    setItems(res)
                }
                console.log(res)
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])




    return (
        <>
            {
                loading
                    ? <div>Cargando...</div>
                    : <ItemList productos={items}/>
            }
        </>
    )
}