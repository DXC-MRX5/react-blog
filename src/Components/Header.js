import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <div className='header-cntnr'>
        <div className='heading'>
            <h2>The</h2> 
            <h1>SIREN</h1>
        </div>
        <div className='links'>
            <p><NavLink className={(navdata)=>navdata.isActive ? 'def' : 'abc'} to='/home'>Home</NavLink></p>
            <p><NavLink className={(navdata)=>navdata.isActive ? 'def' : 'abc'} to='/hollywood'>Hollywood</NavLink></p>
            <p><NavLink className={(navdata)=>navdata.isActive ? 'def' : 'abc'} to='/bollywood'>Bollywood</NavLink></p>
            <p><NavLink className={(navdata)=>navdata.isActive ? 'def' : 'abc'} to='/food'>Food</NavLink></p>
            <p><NavLink className={(navdata)=>navdata.isActive ? 'def' : 'abc'} to='/fitness'>Fitness</NavLink></p>
            <p><NavLink className={(navdata)=>navdata.isActive ? 'def' : 'abc'} to='/tech'>Technology</NavLink></p>
        </div>
    </div>
  )
}

export default Header