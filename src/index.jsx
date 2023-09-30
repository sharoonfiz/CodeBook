import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from './Components/Main/Elements/ScrollToTop.jsx'
import FilterContext from './Components/Context/FilterContext.jsx'
import './index.scss'
import CartContext from './Components/Context2/CartContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <FilterContext>

        <CartContext>
          <ToastContainer />
          <ScrollToTop />
          <App />
        </CartContext>

      </FilterContext>
    </BrowserRouter>
  </React.StrictMode>,
)
