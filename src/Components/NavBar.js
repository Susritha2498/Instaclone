import React from 'react'
import Logo1 from '../Images/Logo1.jpg'
import Inf from '../Images/Logo3.png'
import {Link} from "react-router-dom"

function NavBar() {
  return (
    <nav className='header1'>
        <div>
        <Link to='/landpage' id="headerImage1"><img src= {Logo1} alt="Logo" /></Link>
        <h1 style={{display:'inline-block'}}>InstaClone</h1>
        </div>

        <Link to='/add/post' id="headerImage2"><img src={Inf} alt="Camera Icon"/></Link>
    </nav>
  )
}

export default NavBar