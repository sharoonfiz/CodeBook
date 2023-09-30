



export const userData = async () => {
    const token = JSON.parse(sessionStorage.getItem("token"));
    const cbid = JSON.parse(sessionStorage.getItem("cbid"))

    const options = {
        method: "GET",
        headers: { "content-Type": "application/json", Authorization: `Bearer ${token}` }

    }

    const res = await fetch(`http://localhost:8000/600/users/${cbid}`, options)
    const data = await res.json()

    return data

}



export const userOrders = async (cartItems, SubTotal, user) => {
    const token = JSON.parse(sessionStorage.getItem("token"));
    const cbid = JSON.parse(sessionStorage.getItem("cbid"))

    const order = {
        cartItems: cartItems,
        amount_paid: SubTotal,
        quantity: cartItems.length,

        user: {
            name: user.name,
            email: user.email,
            id: cbid,
        }
    }

    const options = {
        method: "POST",
        headers: { "content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify(order)

    }


    const res = await fetch(`http://localhost:8000/660/orders/`, options)
    const data = await res.json()

    return data

}