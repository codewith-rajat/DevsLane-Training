import React from 'react'
import {Link} from 'react-router-dom'
export default function Items({image, name, category,price,id}) {
  return (
    <div className='bg-white pt-8 w-80'>
      <img src={image} alt={name} className="w-full h-70 object-fill" />
        <p className="text-gray-600 mt-2">{category}</p>
        <h2 className="text-xl font-bold mt-1">{name}</h2>
        <p className="text-lg font-semibold mt-2">${price}</p>
        <button className="border-red-500 border-4 bg-red-500 text-white px-6 py-2 rounded">
          <Link to={"/details/"+id} >View Details</Link>
        </button>
    </div>
  )
}