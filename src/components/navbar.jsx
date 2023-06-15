import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = ({cart}) => {
  return (
    <div>
      <Link to='/'>Shop</Link>
      <Link to='/cart' state={cart}>cart <sup>{cart}</sup></Link>
      
    </div>
  )
}

export default Navbar
