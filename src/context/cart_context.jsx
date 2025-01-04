import { createContext,useContext,useState } from "react";

const intialState = {
    cart: [],
    totalPrice:0
}

const cartContext = createContext(intialState);


const CartProvider = ({children}) => {

     const [cart, setCart] = useState([]);
      const [totalPrice, setTotalPrice] = useState(0);
      


    return  (
         <cartContext.Provider value={{cart,setCart,totalPrice ,setTotalPrice}}>
             {children}
         </cartContext.Provider>
    )
}


const usecart = () => useContext(cartContext);

export {usecart, CartProvider};
