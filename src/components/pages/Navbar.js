import React, { useState } from 'react'
import NavStyle from '../styledComponents/NavStyle'
import logo from '../../images/logo.png'
import { FaAlignLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(!isOpen)
    }

    return (
        <NavStyle>
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to='/'>
                            <img src={logo} alt="Hotels" />
                        </Link>
                        <button type='button' className='nav-btn' onClick={handleToggle}>
                            <FaAlignLeft className='nav-icon' />
                        </button>
                    </div>
                    <ul className={isOpen ? 'nav-links show-nav' : 'nav-links'}>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/rooms'>Rooms&Rates</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact</Link>
                        </li>
                        <Link to='/bookings' className="btn-primary navBtn">Book Now</Link>
                    </ul>
                </div>
            </nav>
        </NavStyle>
    )
}

export default Navbar
