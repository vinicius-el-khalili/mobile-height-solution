import '@/styles/globals.css'
import Layout from '@/components/Layout/Layout'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }) {
  const [height,setHeight] = useState(0)
  const [width,setWidth] = useState(0)
  useEffect(()=>{
    setHeight(window.innerHeight)
    setWidth(window.innerWidth)
  })
  return (
    <Layout
    height={height}
    width={width}
    >
      <Component {...pageProps} />
    </Layout>
  )
}
