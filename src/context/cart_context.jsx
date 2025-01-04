import { createContext,useContext,useState } from "react";

const intialState = {
    cart: [],
    totalPrice:0
}

const cartContext = createContext(intialState);


const CartProvider = ({children}) => {

     const [cart, setCart] = useState([]);
      const [totalPrice, setTotalPrice] = useState(0);
      const [showPaymentForm, setShowPaymentForm] = useState(false);


    return  (
         <cartContext.Provider value={{cart,setCart,totalPrice ,setTotalPrice,showPaymentForm,setShowPaymentForm}}>
             {children}
         </cartContext.Provider>
    )
}


const usecart = () => useContext(cartContext);

export {usecart, CartProvider};
