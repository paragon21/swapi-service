import React from 'react'
import './header.css'
import {Link} from 'react-router-dom'

const Header = () => {
    return(
      <header>
        <Link to="/" className="logo" id="id-logo">Swapi</Link>
        <nav className="nav">
          <Link to="/persons" className="nav-link">Persons</Link>
          <Link to="/starships" className="nav-link">Starships</Link>
        </nav>
      </header>
    )
}

export default Header