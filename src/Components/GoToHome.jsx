import React from 'react'
import { useNavigate } from 'react-router-dom'

export const GoToHome = () => {
    const navigate=useNavigate();
  return (
    <div>
      <button onClick={()=>navigate('/')} className='btn btn-danger'>Go To Home</button>
    </div>
  )
}


