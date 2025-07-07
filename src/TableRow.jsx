import React from 'react';
function TableRow({number, index}){
    return (
        <div className='text-indigo-500 p-2'>
            {number} x {index} = {number*index}
        </div>
    );
}

export default TableRow;