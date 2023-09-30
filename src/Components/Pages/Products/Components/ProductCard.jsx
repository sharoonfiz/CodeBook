import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import RatingStar from './RatingStar'
import { useContext } from 'react'
import { CartDataContext } from '../../../Context2/CartContext'

const ProductCard = ({ featured }) => {


    const { state, dispatch } = useContext(CartDataContext)

    const { id, name, overview, poster, price, best_seller, rating, in_stock } = featured

    const handleAddToCart = () => {
        dispatch({
            type: "ADDTOCART",
            payload: featured,
        })
    }


    const handleRemoveCart = (id) => {
        dispatch({
            type: "REMOVE_CART",
            payload: id,
        })
    }
    const cartExist = state.cartItems.some((cart) => cart.id === id)




    return (

        <div key={id} className="m-3 max-w-sm relative bg-white rounded-xl  shadow-lg dark:bg-blue-950 dark:border-gray-700 transition ease-in-out duration-[1.6s] cursor-pointer transform hover:scale-95  ">
            <Link to={`/products/${id}`} className="" >

                {best_seller && <span className="absolute top-4 left-2 px-2 bg-orange-500 bg-opacity-90 text-white rounded">Best Seller</span>}
                <img className="rounded-t-lg w-full h-64" src={poster} alt={name} />
            </Link>
            <div className="p-5">
                <Link to={`/products/${id}`}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name} </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-cyan-200">{overview} </p>

                </Link>
                <div className="flex items-center my-2">

                    <RatingStar rating={rating} />

                </div>

                <p className="flex justify-between items-center">
                    <span className="text-2xl dark:text-gray-200">
                        <span> $</span><span>{price} </span>
                    </span>

                    {cartExist ?
                        (<button onClick={() => handleRemoveCart(id)} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800">Remove Item <i className="ml-1 bi bi-trash3"></i></button>)
                        :
                        (<button onClick={() => handleAddToCart()} disabled={in_stock ? "" : "disabled"} className={`inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg transition ease-in-out duration-1000 transform hover:scale-110 hover:bg-cyan-400 ${in_stock ? "" : "cursor-not-allowed"} `}> Add To Cart <i className="ml-1 bi bi-plus-lg"></i></button>)
                    }



                </p>
            </div>
        </div>
    )
}

export default ProductCard