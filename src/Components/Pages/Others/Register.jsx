import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react';
import { Bounce, toast } from 'react-toastify';
import UseTitle from '../../../Hooks/UseTitle';


const Register = () => {
    UseTitle("Register Page")

    const name = useRef()
    const email = useRef()
    const password = useRef()

    const navigate = useNavigate()


    const handleRegister = async (e) => {
        e.preventDefault()

        const authDetails = {
            name: name.current.value,
            email: email.current.value,
            password: password.current.value,

        }

        const options = {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: JSON.stringify(authDetails)
        }

        const res = await fetch(`http://localhost:8000/register`, options);
        const data = await res.json()


        data.accessToken ? navigate(`/products`) : toast.error(data, {
            position: "top-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            transition: Bounce,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });

        data.accessToken ? toast.success('🦄 Login Success', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        })
            : null;


        if (data.accessToken) {
            sessionStorage.setItem("token", JSON.stringify(data.accessToken));
            sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
        }


    }





    return (
        <main>
            <section>
                <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">Register</p>
            </section>
            <form onSubmit={(e) => handleRegister(e)} >
                <div className="mb-6">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your name</label>
                    <input type="name" ref={name} id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Sharoon S" required autoComplete="off" />
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                    <input type="email" ref={email} id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="sharoon@example.com" required autoComplete="off" />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                    <input type="password" ref={password} id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required minLength="7" />
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
            </form>
        </main>
    )
}

export default Register
