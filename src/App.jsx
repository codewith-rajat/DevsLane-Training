import React, { useState } from 'react';
import {Routes,Route} from 'react-router-dom'
import Details from './Components/Details';
import ItemListPage from './Components/ItemListPage';

function App() {
  const path = window.location.pathname;
  return (
    <div>
      <Routes>
        <Route index element={<ItemListPage/>} />
        <Route path='/details/:id' element={<Details/>} />
      </Routes>
    </div>
  );
}

export default App