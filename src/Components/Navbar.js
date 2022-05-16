import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({cart}) {
    return (
        <nav className="container-fluid-nav text-center bg-dark p-4">
            <Link to={'/cart'}><span><h3 style={{float:'right'}}>cart({cart.length})</h3></span></Link>
            <Link to={'/'}><h1 style={{color:'white'}}>Welcome To Restaurant</h1></Link>
            
        </nav>
    )
}

export default Navbar
