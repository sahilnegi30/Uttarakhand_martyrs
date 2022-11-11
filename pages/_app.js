import '../styles/globals.scss'
import 'tailwindcss/tailwind.css'
import React,{useEffec,useState} from 'react'
import {Layout} from '../components'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
     <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
