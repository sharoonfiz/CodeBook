export const initialState = {

    productList: [],
    onlyInstock: false,
    bestSellerOnly: false,
    sortBy: null,
    ratings: null,

}



export const reducerCallBack = (state, action) => {


    const { type, payload } = action;

    switch (type) {
        case "PRODUCT_LIST":

            return { ...state, productList: [...payload] }

        case "BESTSELLER":

            return { ...state, bestSellerOnly: payload.bestSellerOnly }

        case "INSTOCK":
            return { ...state, onlyInstock: payload.onlyInstock }

        case "SORT_BY":

            return { ...state, sortBy: payload.sortBy }

        case "RATING":
            return { ...state, ratings: payload.ratings }

        case "CLEAR_FILTER":
            return {
                ...state, onlyInstock: false,
                bestSellerOnly: false,
                sortBy: payload.sortBy,
                ratings: null,
            }

    }




}