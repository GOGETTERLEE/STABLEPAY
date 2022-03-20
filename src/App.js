
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Launch from './pages/Launch'
import {Provider} from './context/Context'



function App() {
 
  return (
    <Provider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Launch/*' element={<Launch />} />
      </Routes>
      </Provider>
      
  )
}export default App;