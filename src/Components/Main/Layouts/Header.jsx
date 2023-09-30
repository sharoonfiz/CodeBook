
// import { CiSettings } from 'react-icons/ci'
import { BiSearchAlt } from 'react-icons/bi';
import { BiSolidCartAlt } from 'react-icons/bi';
import { BsPersonCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import RLogo from '../../../assets/R.png'
import ToogleButton from './ToogleButton';
import Search from '../Elements/Search';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DropDownLogin from '../../Pages/Dashboard/DropDownLogin';
import DropDownLogout from '../../Pages/Dashboard/DropDownLogout';
import { CartDataContext } from '../../Context2/CartContext';




const Header = () => {
    const { state: { cartItems } } = useContext(CartDataContext)
    const token = JSON.parse(sessionStorage.getItem("token"))


    const [search, setSearch] = useState(false)
    const [dropdown, setDropdown] = useState(false)

    const handleSearch = (searchVal) => {
        setSearch(searchVal)
    }





    return (
        <div className='header ' >

            <div className="">




                <nav class="bg-teal-500 border-gray-200 dark:bg-blue-950 p-2  transition ease-in-out duration-[1.6s] cursor-pointer ">
                    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                        <Link to="/" class="flex items-center">
                            <img src={RLogo} class="h-8 mr-3" alt=" RLogo" />
                            <span class="self-center text-2xl font-semibold whitespace-nowrap text-cyan-300 dark:text-white">CodeBook</span>
                        </Link>

                        <div class="flex items-center">
                            <Link>
                                <ToogleButton />
                                {/* <CiSettings onClick={() => setDark(!darkMode)} className='me-3 text-[29px] cursor-pointer text-cyan-300 dark:text-cyan-400 ' /> */}
                            </Link>


                            <BiSearchAlt className='me-3 text-[28px] cursor-pointer  text-cyan-100 dark:text-cyan-400' onClick={() => { handleSearch(!search) }} />


                            <Link to='/Cart'   >
                                <BiSolidCartAlt className='me-3 relative  text-[28px] cursor-pointer  text-cyan-300 dark:text-cyan-400 ' />
                                <span className=' absolute w-4 h-6 rounded-[30rem] z-50 ms-4 text-center bg-yellow-300 text-white  top-[7px] '> <p className=' '>{cartItems.length} </p> </span>
                            </Link>



                            <BsPersonCircle onClick={() => setDropdown(!dropdown)} className='me-3 relative text-[23px] cursor-pointer  text-cyan-100 dark:text-cyan-400 ' />

                            {dropdown && (token ? <DropDownLogin {...{ setDropdown }} /> : <DropDownLogout {...{ setDropdown }} />)}



                        </div>
                    </div>
                </nav>



                {search && <Search {...{ setSearch }} />}


            </div >

        </div >
    )
}

export default Header