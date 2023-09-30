export const initialState = {
    cartItems: []
}

export const reducerCall = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "ADDTOCART":
            return { ...state, cartItems: [...state.cartItems, payload] }

        case "REMOVE_CART":
            return { ...state, cartItems: state.cartItems.filter((cart) => cart.id !== payload) }

        case "CLEAR_CART":
            return { ...state, cartItems: state.cartItems = [] }




    }
}