import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'

export const User = () => {
   const [searchParams, setSearchParams] = useSearchParams() 
   const showActiveUsers =searchParams.get('filters') === 'active'
  return (
    <div>
      <h2>User 1</h2>
      <h2>User 2</h2>
      <h2>User 3</h2>
      <Outlet />
      <div>
         <button onClick={() => setSearchParams({filters: 'active'})}>Active users</button>
         <button onClick={() => setSearchParams()}>Reset Filters </button>
      </div>
      {showActiveUsers ? <h2>Showing Active Users</h2> : <h2>Showing all users</h2>}
    </div>
   
  )
}
// Userid can be anything no/strings

