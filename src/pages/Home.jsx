import React, { useEffect, useState } from 'react'
import { request } from '../api'
import Products from '../components/Products'

const Home = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    request
      .get("/products", {
        params: {
          limit: 10
        }
      })
      .then(res => setProducts(res.data.products))
  }, [])

  return (
    <div className='container'>
      <Products data={products} />
    </div>
  )
}

export default Home