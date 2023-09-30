import React, { useEffect, useState } from 'react'
import ProductCard from '../../Products/Components/ProductCard'


const FeaturedItems = () => {

    const [products, setProducts] = useState([])
    console.log("data got", products);

    useEffect(() => {

        const fetchData = async () => {
            const response = await fetch(`http://localhost:8000/444/featured_products`)
            const data = await response.json()
            setProducts(data)

        }

        fetchData()

    }, [])


    return (

        <section className="my-20">
            <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">Featured eBooks</h1>
            <div className="flex flex-wrap justify-center lg:flex-row">

                {products.map((featured) => (
                    <ProductCard key={featured.id} featured={featured} />
                ))}

            </div>
        </section>

    )
}

export default FeaturedItems