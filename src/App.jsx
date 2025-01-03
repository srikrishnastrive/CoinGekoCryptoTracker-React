import { useState } from 'react'

import './App.css'

import Home from './components/Home/Home'
import { CurrencyContext } from './context/CurrenencyContext';

function App() {
  const [currency, setCurrency] = useState('usd');

  return (
    <CurrencyContext.Provider value = {{currency,setCurrency}}>
      <Home/>
    </CurrencyContext.Provider>
   
  )
}

export default App
