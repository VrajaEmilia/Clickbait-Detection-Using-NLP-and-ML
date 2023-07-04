import React from 'react'
import '../style/Navbar.css'
function Navbar() {
  return (
    <div className='navbar-container'>
      <ul>
        <li><a href="#top">About</a></li>
        <li><a href="#prediction">Clickbait Detection</a></li>
        <li><a href="#thesis">Thesis</a></li>
      </ul>
    </div>
  )
}

export default Navbar