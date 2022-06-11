import React from 'react'
import { Helmet } from 'react-helmet'
import initialState from '../initialState'
import Products from '../components/Products'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Cattle Merch - Productos</title>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content="@TU_USER"/>
        <meta name="twitter:creator" content="@TU_USER"/>
        <meta name="twitter:title" content="Cattle Merch"/>
        <meta name="twitter:description" content="Cattle Merch"/>
        <meta
          name="twitter:image"
          content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
        />
        <meta property="og:title" content="Cattle Merch"/>
        <meta property="og:description" content="Cattle Merch"/>
        <meta
          property="og:image"
          content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
        />
        <meta property="og:url" content="platzistore.xyz" />
        <meta property="og:site_name" content="Cattle Merch" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="article" />
        <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
      </Helmet>
      <Products products={initialState.products} /> 
    </>
  )
}

export default Home