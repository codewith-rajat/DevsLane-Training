import React from 'react';
import Items from './Items';
function Details({ item, goBack }) {
    return (
        <div className='flex justify-center item-center h-screen bg-stone-100'>
            <div className='flex bg-white item-center w-3/4 h-3/4 my-20'>
                <div className='p-8 w-1/2'>
                    <img className="object-contain h-full w-full" src={item.image} alt={item.name} />
                </div>
                <div className='w-1/2 pt-20'>
                    <h2 className='text-3xl font-medium ' >{item.name}</h2>
                    <p className='mt-4 text-xl font-bold' >${item.price}</p>
                    <p className='mt-4 mr-8' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, enim aliquid laboriosam eius autem odio minima recusandae fugiat totam aspernatur veritatis laudantium illo alias optio et explicabo impedit delectus mollitia.</p>
                    <div className='mt-6' >
                        <input type="text" value="1" className='border-2 border-gray-200 w-12 p-1' />
                        <button className='ml-2 bg-red-500 text-white px-12 py-2 rounded-lg' >Add to Cart</button>
                    </div>
                    <button className='bg-red-500 text-white px-4 py-2 mt-4 rounded-lg' onClick={goBack} >back</button>
                </div>
            </div>
        </div>
    );
}

export default Details;