import React, { useRef } from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'



const Search = ({ setSearch }) => {

    const searchRef = useRef()
    let navigate = useNavigate()


    const handelSearch = (e) => {
        e.preventDefault()
        navigate(`/products/?q=${searchRef.current.value}`);


        setSearch(false)
        searchRef.current.value = ""
    }



    return (


        <div className="mx-auto max-w-screen-xl p-2 pt-4 mt-10 ">
            <form onSubmit={(e) => handelSearch(e)} className="flex items-center  ">
                <div className="relative w-full transition ease-in-out duration-[1.6s] cursor-pointer">
                    <BiSearchAlt2 className=" text-[36px] pl-3 flex absolute mt-1 left-0 items-center  pointer-events-none"></BiSearchAlt2>
                    <input ref={searchRef} name="search" type="text" id="simple-search" className="bg-teal-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-cyan-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black font-semibold dark:focus:ring-blue-500 " placeholder="Search" autoComplete="off" required="" />
                </div>
                <button type="submit" className=" relative p-4 ml-2 text-sm font-medium text-white bg-blue-700 rounded-xl border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <BiSearchAlt2 className=" text-[36px] pl-3 flex absolute mt-1 top-[-6px] right-[2px] items-center  pointer-events-none"></BiSearchAlt2>
                </button>
            </form>


        </div>


    )
}

export default Search