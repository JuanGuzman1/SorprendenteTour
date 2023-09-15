import React, {createContext, useState, useMemo, useContext} from 'react'

const CartContext = createContext({});

function CartContextProvider({children}) {
    const [cart, setCart] = useState([]);
    const obj = useMemo(()=> ({cart, setCart}),[cart])

  return (
    <CartContext.Provider value={obj}>{children}</CartContext.Provider>
  )
}

export default CartContextProvider
export const useCartContext = () => useContext(CartContext);