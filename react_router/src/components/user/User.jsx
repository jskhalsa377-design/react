import React from 'react'
import { useParams } from 'react-router-dom'
//use param is used for accessing link elements 
function User() {
  const { userid } = useParams()

  return (
    <div className="bg-gray-600 text-white text-3xl p-4 text-center">
      User: {userid}
    </div>
  )
}

export default User