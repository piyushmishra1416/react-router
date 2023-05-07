import React from 'react'
import { Link,Outlet } from 'react-router-dom'

export const Products = () => {
  return (
   <>
    <div>
      <input type='search' placeholder='Search products' />
      <nav>
         <Link to ='feature'>Featured</Link>
         <Link to='new'>New products</Link>
      </nav>
      <Outlet />
    </div>
    </>
  )
}
