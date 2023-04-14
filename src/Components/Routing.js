import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Home'
import Bollywood from './Bollywood'
import Hollywood from './Hollywood'
import Fitness from './Fitness'
import Food from './Food'
import Tech from './Tech'
import Actualdata from './Actualdata';


const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/bollywood' element={<Bollywood/>}/>
        <Route path='/hollywood' element={<Hollywood/>}/>
        <Route path='/fitness' element={<Fitness/>}/>
        <Route path='/food' element={<Food/>}/>
        <Route path='/tech' element={<Tech/>}/>
        <Route path='/actual/:Data' element={<Actualdata/>}/>
    </Routes>
  )
}

export default Routing