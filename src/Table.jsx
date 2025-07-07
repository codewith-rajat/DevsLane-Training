import React,{useState} from 'react';
import TableRow from './TableRow';
function Table(){
    const [num,setNum]=useState(2);
    function nextTable(){
        setNum(num+1);
    }
    return (
        <div className='flex-col'>
        <button onClick={nextTable} className='bg-indigo-700 text-white px-4 py-2 rounded-xl mb-2'>Next</button>
        <TableRow number={num} index={1} />
        <TableRow number={num} index={2} />
        <TableRow number={num} index={3} />
        <TableRow number={num} index={4} />
        </div>
    );
}
export default Table;