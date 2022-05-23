import React from 'react';
import cover from '../Images/Cover.jpg'
import { Link } from 'react-router-dom';

export default function PostView() {
  return(
    <div className='StartPage'>
      <nav className='header2'>
        <h1>1.</h1>
      </nav>
      <section className='section2'>
        <img src={cover} alt="StartImg" className='firstPageImage' />
        <div className='Enterhere'>
          <h1>10x Team 04</h1>
          <Link to='/landpage'><button>Enter</button></Link>
        </div>
      </section>
    </div>
  )
}
