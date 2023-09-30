import React from 'react'
import Layout from './Components/Main/Layout';
import AllRoutes from './Components/AllRoutes/AllRoutes';
import './index.scss';


const App = () => {



  return (
    <div className='App  dark:bg-darkbg transition ease-in-out duration-[1.6s] cursor-pointer ' >

      <Layout  >

        <AllRoutes />

      </Layout>


    </div >
  )
}

export default App
