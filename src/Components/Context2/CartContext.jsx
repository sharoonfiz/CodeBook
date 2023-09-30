import React, { useReducer } from 'react'
import { createContext } from 'react'
import { initialState, reducerCall } from './CartReducer'


export const CartDataContext = createContext()

const CartContext = ({ children }) => {

    const [state, dispatch] = useReducer(reducerCall, initialState)
    console.log("Cart", state);

    const cartValue = { state, dispatch }

    return (
        <div>
            <CartDataContext.Provider value={cartValue}>
                {children}
            </CartDataContext.Provider>
        </div>
    )
}

export default CartContext