import React from 'react'
import Back from '../back/Back'
import Front from '../front/Front'
import { Routes, Route } from 'react-router-dom'


const Main = () => (
  <Routes>
    <Route path='/front' element={<Front />}/>
    <Route path='/back' element={<Back />}/>
  </Routes>
)

export default Main
      
      