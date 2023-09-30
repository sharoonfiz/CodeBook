import React, { useContext, useEffect, useState } from 'react'
import RatingStar from './RatingStar'
import { useParams } from 'react-router-dom'
import UseTitle from '../../../../Hooks/UseTitle'
import { CartDataContext } from '../../../Context2/CartContext'

const ProductDetails = () => {

    // const [productExist, setproductExist] = useState(false)
    const { state, dispatch } = useContext(CartDataContext)

    const { id } = useParams()

    const [ProductDetails, setproductDetails] = useState({})

    UseTitle(ProductDetails.name)

    useEffect(() => {

        const fetchData = async () => {
            let response = await fetch(`http://localhost:8000/444/products/${id}`)
            let data = await response.json()
            setproductDetails(data)
        }

        fetchData()

    }, [id])


    const handleAddToCart = () => {
        dispatch({
            type: "ADDTOCART",
            payload: ProductDetails,
        })
    }

    const handleRemoveCart = (id) => {
        dispatch({
            type: "REMOVE_CART",
            payload: id,
        })
    }

    let cartExist = state.cartItems.some((cart) => cart.id === ProductDetails.id)
    // useEffect(() => {
    //     let cartExist = state.cartItems.some((cart) => cart.id === ProductDetails.id)
    //     if (cartExist) {
    //         setproductExist(true)
    //     } else {
    //         setproductDetails(false)
    //     }


    // }, [state.cartItems, ProductDetails.id])


    return (
        <main className='' >

            <section key={ProductDetails.id} >

                <h1 className="mt-10 mb-5 text-4xl text-center font-bold text-gray-900 dark:text-slate-200">{ProductDetails?.name} </h1>
                <p className="mb-5 text-lg text-center text-gray-900 dark:text-slate-200">{ProductDetails?.overview} </p>

                <div className="flex flex-wrap justify-around">
                    <div className="max-w-xl my-3">
                        <img className="rounded" src={ProductDetails?.poster} alt={ProductDetails?.name} />
                    </div>

                    <div className="max-w-xl my-3">

                        <p className="text-3xl font-bold text-gray-900 dark:text-slate-200">
                            <span className="mr-1">$</span>
                            <span className="">{ProductDetails?.price} </span>
                        </p>

                        <p className="my-3">
                            <RatingStar rating={ProductDetails?.rating} />
                        </p>

                        <p className="my-4 select-none">
                            {ProductDetails?.best_seller && <span className="font-semibold text-amber-500 border bg-amber-50 rounded-lg px-3 py-1 mr-2">BEST SELLER</span>}


                            {ProductDetails?.in_stock ?
                                (<span className="font-semibold text-emerald-600	border bg-slate-100 rounded-lg px-3 py-1 mr-2">INSTOCK</span>)
                                :
                                (<span className="font-semibold text-rose-600 border bg-slate-100 rounded-lg px-3 py-1 mr-2">OUT OF STOCK</span>)
                            }

                            <span className="font-semibold text-blue-500 border bg-slate-100 rounded-lg px-3 py-1 mr-2">{ProductDetails?.size} MB </span>

                        </p>

                        <p className="my-3">

                            {cartExist ?
                                (<button onClick={() => handleRemoveCart(ProductDetails.id)} className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800`}>Remove Item <i className="ml-1 bi bi-trash3"></i></button>)
                                :
                                (<button onClick={() => handleAddToCart()} disabled={ProductDetails.in_stock ? "" : "disabled"} className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800`}>Add To Cart <i className="ml-1 bi bi-plus-lg"></i></button>)
                            }

                        </p>

                        <p className="text-lg text-gray-900 dark:text-slate-200">
                            {ProductDetails?.long_description}
                        </p>
                    </div>
                </div>
            </section>

        </main >
    )
}

export default ProductDetails