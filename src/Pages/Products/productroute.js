import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Products from './Products'
import Addproducts from './Addproducts'

export default function Productroute() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Products></Products>}></Route>
        <Route path='/Addproducts' element={<Addproducts></Addproducts>}></Route>
      </Routes>
    </div>
  )
}
