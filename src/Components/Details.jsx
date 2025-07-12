import React from 'react';
import { useParams } from 'react-router-dom';
import allData from './AllData';
import { Link } from 'react-router-dom';
function Details() {
    const params = useParams();
    const id = params.id;

    let clickedItem;
    for(let i=0;i<allData.length;i++){
        const p = allData[i];
        if(id==p.id){
            clickedItem=p;
            break;
        }
    }

    return (
        <div className='flex justify-center item-center h-screen bg-stone-100'>
            <div className='flex bg-white item-center w-3/4 h-3/4 my-20'>
                <div className='p-8 w-1/2'>
                    <img className="object-contain h-full w-full" src={clickedItem.image} alt={clickedItem.name} />
                </div>
                <div className='w-1/2 pt-20'>
                    <h2 className='text-3xl font-medium ' >{clickedItem.name}</h2>
                    <p className='mt-4 text-xl font-bold' >${clickedItem.price}</p>
                    <p className='mt-4 mr-8' >{clickedItem.description}</p>
                    <div className='mt-6' >
                        <input type="text" value="1" className='border-2 border-gray-200 w-12 p-1' />
                        <button className='ml-2 bg-red-500 text-white px-12 py-2 rounded-lg' >Add to Cart</button>
                    </div>
                    <button className='bg-red-500 text-white px-4 py-2 mt-4 rounded-lg' >
                        <Link to={'/'} >Back to Home</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Details;