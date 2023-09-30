import React, { useState } from 'react'
import OrderSucess from './Components/OrderSucess'
import OrderFailed from './Components/OrderFailed'
import { useLocation } from 'react-router-dom';

const OrderPage = () => {

    const { state: { orderData, status } } = useLocation()


    return (
        <main>


            {status ? <OrderSucess {...{ orderData }} /> : <OrderFailed />}

        </main>
    )
}

export default OrderPage