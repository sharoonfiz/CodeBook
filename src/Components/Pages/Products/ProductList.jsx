import React, { useContext, useEffect, useState } from 'react'
import ProductCard from './Components/ProductCard'
import FilterBar from './Components/FilterBar'
import UseTitle from '../../../Hooks/UseTitle'
import { useLocation } from 'react-router-dom'
import { FilterAppContext } from '../../Context/FilterContext'

const ProductList = () => {

    const { state, dispatch, FilteredProductList } = useContext(FilterAppContext)

    const [error, setError] = useState(null)

    const [showFilter, setshowFilter] = useState(false)

    const search = useLocation().search;
    const searchTerm = new URLSearchParams(search).get("q")

    UseTitle("Explore collection of eBook")




    useEffect(() => {

        const fetchData = async () => {

            try {
                const response = await fetch(`http://localhost:8000/444/products?name_like=${searchTerm ? searchTerm : ""}`);
                const data = await response.json()

                dispatch({ type: "PRODUCT_LIST", payload: data })

            } catch (error) {
                setError(error.message)
            }
        }

        fetchData()
    }, [searchTerm])

    return (
        <main >
            <section className='my-5' >



                <div className="my-5 flex justify-between">
                    <span className="text-2xl font-semibold dark:text-slate-100 mb-5">All eBooks ({FilteredProductList.length})</span>
                    <span>
                        <button onClick={() => setshowFilter(!showFilter)} id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700" type="button">
                            <svg className="w-6 h-6 hover:text-green-400 " aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
                        </button>
                    </span>
                </div>

                <div className="flex flex-wrap justify-center lg:flex-row">

                    <h2 className=' text-white text-2xl ' >  {error} </h2>

                    {FilteredProductList.map((product) => (

                        <ProductCard key={product.id} featured={product} />
                    ))}



                </div>

                {showFilter && <FilterBar {...{ setshowFilter }} />}



            </section>
        </main>
    )
}

export default ProductList