import React from 'react'
import { useNavigate } from 'react-router-dom'

export const OrderConfirmed = () => {
   const navigate = useNavigate()
  return (
   <>
    <div>OrderConfirmed !</div>
    <button onClick={() => navigate(-1)}>Go Back</button>
    </>
  )
}
