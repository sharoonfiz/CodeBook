import React, { useContext, useMemo } from 'react';
import CartList from './Components/CartList';
import CartEmpty from './Components/CartEmpty';
import { CartDataContext } from '../../Context2/CartContext';
import UseTitle from '../../../Hooks/UseTitle';


const Cart = () => {
    const { state: { cartItems }, dispatch } = useContext(CartDataContext);
    UseTitle(`Product Cart (${cartItems.length})`);




    const SubTotal = useMemo(() => {

        return cartItems.reduce((acc, val) => acc + Number(val.price), 0);

    }, [cartItems]);



    return (
        <main>
            {
                cartItems.length <= 0 ? <CartEmpty /> : <CartList {...{ cartItems, SubTotal }} />
            }
        </main>
    )
}

export default Cart