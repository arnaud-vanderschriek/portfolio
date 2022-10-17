import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Back from '../back/Back'
import Front from '../front/Front'


const Main = () => (
    <Routes>
      <Route path='/front' element={<Front />}/>
      <Route path='/back' element={<Back />}/>
    </Routes>
)

export default Main
      
      