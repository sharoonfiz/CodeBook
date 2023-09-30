import React from 'react'
import Header from './Layouts/Header'
import MainSection from './Layouts/MainSection'
import Footer from './Layouts/Footer'

const Layout = ({ children }) => {
    return (
        <div  >
            <Header />
            <MainSection>
                {children}
            </MainSection>
            <Footer />
        </div>
    )
}

export default Layout