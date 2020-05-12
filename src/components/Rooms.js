import React from 'react'
import { Link } from 'react-router-dom'
import Hero from './pages/Hero'
import Banner from './pages/Banner'
import RoomsContainer from './pages/rooms/RoomsContainer'

const Rooms = () => {
    return (
        <>
            <Hero hero="roomsHero">
                <Banner title='Our Rooms'>
                    <Link to='/' className='btn-primary'>
                        Return Home
                </Link>
                </Banner>
            </Hero>
            <RoomsContainer />
        </>
    )
}

export default Rooms
