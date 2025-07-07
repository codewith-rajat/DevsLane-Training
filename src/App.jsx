import { useState } from 'react'
import Table from './Table';

function App() {
  const [flip, setFlip] = useState(false);
  let key1='t1';
  let key2='t2';
  if(flip){
    key1 ='t2';
    key2='t1';
  }
  function flipped(){
    setFlip(!flip);
  }
  return (
    <>
    <div className='flex m-2'>
      <Table key={key1}/>
      <Table key={key2}/>
    </div>
    <button onClick={flipped} className='bg-red-500 text-white px-6 py-2 rounded-xl ml-6'>Flip</button>
    </>
  )
}

export default App
