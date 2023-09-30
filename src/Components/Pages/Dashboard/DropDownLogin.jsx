import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const DropDownLogin = ({ setDropdown }) => {

    const [User, setUsers] = useState({})


    const navigate = useNavigate()

    const handleLogout = () => {
        sessionStorage.removeItem("token")
        setDropdown(false);
        navigate(`/`)
    }

    useEffect(() => {
        const data = JSON.parse(sessionStorage.getItem("data"))
        data.user.email ? setUsers(data) : handleLogout()


    }, [])


    return (

        <div id="dropdownAvatar" className="select-none	absolute top-[3.9rem] right-[9.5rem] z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
            <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
                <div className="font-medium truncate">{User?.user?.email}</div>
            </div>
            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
                <li>
                    <Link to="/products" onClick={() => setDropdown(false)} className="block py-2 px-4 transition duration-[1.9s] hover:bg-cyan-200 dark:hover:bg-green-400 dark:hover:text-white">All eBooks</Link>
                </li>
                <li>
                    <Link to="/dashBoard" onClick={() => setDropdown(false)} className="block py-2 px-4 transition duration-[1.9s] hover:bg-cyan-200 dark:hover:bg-green-400 dark:hover:text-white">Dashboard</Link>
                </li>
            </ul>
            <div className="py-1">
                <span onClick={() => handleLogout()} className="cursor-pointer block py-2 px-4 text-sm text-bg-cyan-300  transition duration-[1.9s]  hover:bg-red-500 dark:hover:bg-rose-600 dark:text-gray-200 dark:hover:text-white">Log out</span>
            </div>
        </div>

    )
}

export default DropDownLogin