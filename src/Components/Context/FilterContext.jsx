import React, { createContext, useReducer } from 'react'
import { reducerCallBack } from './FilterReducer'
import { initialState } from './FilterReducer'


export const FilterAppContext = createContext()

const FilterContext = ({ children }) => {

    const [state, dispatch] = useReducer(reducerCallBack, initialState)



    const Bestseller = (products) => {
        return state.bestSellerOnly ? products.filter((best) => best.best_seller === true) : products;
    }

    const inStock = (products) => {
        return state.onlyInstock ? products.filter((stock) => stock.in_stock === true) : products;
    }

    const sortBy = (products) => {
        if (state.sortBy === "lowTohigh") {
            return products.sort((a, b) => Number(a.price) - Number(b.price));
        }

        if (state.sortBy === "highTolow") {
            return products.sort((a, b) => Number(b.price) - Number(a.price));
        }

        return products;
    }


    const rating = (products) => {
        if (state.ratings === "4STARTSABOVE") {

            return products.filter((rate) => rate.rating >= 4);
        }
        if (state.ratings === "3STARTSABOVE") {
            return products.filter((rate) => rate.rating >= 3);
        }
        if (state.ratings === "2STARTSABOVE") {
            return products.filter((rate) => rate.rating >= 2);
        }
        if (state.ratings === "1STARTSABOVE") {
            return products.filter((rate) => rate.rating >= 1);
        }

        return products;


    }


    const FilteredProductList = rating(sortBy(inStock(Bestseller(state.productList))))
    console.log("filterGogo", FilteredProductList);


    const contextValue = { state, dispatch, FilteredProductList }

    return (

        <div>

            <FilterAppContext.Provider value={contextValue} >
                {children}
            </FilterAppContext.Provider>


        </div>
    )
}

export default FilterContext