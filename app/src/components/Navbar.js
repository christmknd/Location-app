import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
          <nav>
      <ul>
        <li><Link to="/">Homepage</Link></li>
        <li><Link to="/about">A propos de moi</Link></li> 
      </ul>
    </nav>
    </div>
  )
}

export default Navbar