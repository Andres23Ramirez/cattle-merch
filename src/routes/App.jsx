import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../containers/Home.jsx'
import Checkout from '../containers/Checkout'
import Info from '../containers/Info'
import Payment from '../containers/Payment'
import Success from '../containers/Success'
import NotFound from '../containers/Notfound'
import Layout from '../components/Layout'
import AppContext from '../context/AppContext.js'
import useInitialState from '../hooks/useInitialState.js'

function App() {
  const initialState = useInitialState()
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/checkout/info' element={<Info />} />
            <Route path='/checkout/payment' element={<Payment />} />
            <Route path='/checkout/success' element={<Success />} />
            <Route path  ="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App
