import {useState, createContext} from "react";

export const CartContext = createContext()




export const CartProvider = ({children}) =>{

    const [carrito, setCarrito] = useState([])

    
    
    console.log(carrito)
    const agregarAlCarrito = (item) =>{
        setCarrito([...carrito, item])
    }

    const calcularCantidad = () =>{
        return carrito.reduce((acc, prod) => acc + prod.counter, 0)
    }

    const precioTotal = () =>{
        return carrito.reduce((acc, prod) => {
        console.log("Precio: ", prod.price)
        console.log("Cantidad: ", prod.counter)
        if(prod.price !== undefined && prod.counter !== undefined && typeof prod.price === 'number' && typeof prod.counter === 'number'){
            return acc + prod.price * prod.counter;
        }
        return acc
        }, 0)
    }
    
    return(
        <CartContext.Provider value={{
            // vaciarCarrito,
            agregarAlCarrito,
            // removerItem,
            calcularCantidad,
            precioTotal
        }}>
         {children}   
        </CartContext.Provider>
    )

}
// const init = JSON.parse(localStorage.getItem('carrito')) || []
// useEffect(() => {
//     localStorage.setItem('carrito', JSON.stringify(carrito))
// }, [carrito])
            // const precioTotal = () => {
                //     return carrito.reduce((acc, prod) => {
            //       if (prod.price !== undefined && prod.counter !== undefined) {
            //         return acc + prod.price * prod.counter;
            //       }
            //       return acc;
            //     }, 0);
            //   };
              
        
            // const removerItem = (itemId) =>{
            //     const newCart = carrito.filter((prod) => prod.id !== itemId)
            //     setCarrito(newCart)
            //     console.log("Item removido")
            // }
        
            // const vaciarCarrito = () =>{
            //     setCarrito([])
            //     console.log("Carrito vacio")
            // }