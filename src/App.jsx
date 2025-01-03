import { useState } from 'react'

import './App.css'

import Home from './components/Home/Home'
import { CurrencyContext } from './context/CurrenencyContext';
import Routing from './components/Routing/Routing';

function App() {
  const [currency, setCurrency] = useState('usd');

  return (
    <CurrencyContext.Provider value = {{currency,setCurrency}}>
      <Routing/>
    </CurrencyContext.Provider>
   
  )
}

export default App
