import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartDataContext } from '../../../Context2/CartContext'

const CartCard = ({ cart }) => {

    const { state, dispatch } = useContext(CartDataContext)

    const handleRemoveCart = (id) => {
        dispatch({
            type: "REMOVE_CART",
            payload: id,
        })
    }


    return (
        <div className="flex flex-wrap justify-between border-b dark:border-slate-700 max-w-4xl m-auto p-2 mb-5 ">
            <div className="flex">
                <Link to={`/products/${cart.id}`}>
                    <img className="w-32 rounded" src={cart.poster} alt={cart.name} />
                </Link>
                <div className="">
                    <Link to={`/products/${cart.id}`}>
                        <p className="text-lg ml-4 dark:text-slate-200">{cart.name}</p>
                    </Link>
                    <button onClick={() => handleRemoveCart(cart.id)} className="text-base ml-4 text-red-500 hover:text-red-700 ">Remove</button>
                </div>
            </div>
            <div className="text-lg m-2 dark:text-slate-200">
                <span>${cart.price}</span>
            </div>
        </div>
    )
}

export default CartCard