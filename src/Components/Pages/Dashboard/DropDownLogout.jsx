import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const DropDownLogout = ({ setDropdown }) => {
    const navigate = useNavigate();

    const token = JSON.parse(sessionStorage.getItem("token"))

    const handleEbookNavigate = () => {
        setDropdown(false);
        { !token ? navigate('/login') : navigate('/products') };

    }

    return (

        <div id="dropdownAvatar" className="select-none	absolute top-[3.9rem] right-[9.5rem] z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
                <li>
                    <button onClick={() => handleEbookNavigate()} className="block py-2 pe-[5.1rem] w-[11rem] transition duration-[2s]  hover:bg-cyan-200 dark:hover:bg-cyan-400 dark:hover:text-white">All eBooks</button>
                </li>
                <li>
                    <Link to="/register" onClick={() => setDropdown(false)} className="block py-2 px-4 transition duration-[2s] hover:bg-rose-400 dark:hover:bg-rose-400 dark:hover:text-white">Register</Link>
                </li>
                <li>
                    <Link to="/login" onClick={() => setDropdown(false)} className="block py-2 px-4 transition duration-[2s] hover:bg-green-300 dark:hover:bg-green-400 dark:hover:text-white">Login</Link>
                </li>
            </ul>
        </div>

    )
}

export default DropDownLogout