import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { RoomContext } from '../components/pages/Context/Context'
import defaultBcg from '../images/room-1.jpeg'
// import Hero from '../components/pages/Hero'
import Banner from './pages/Banner'
import StyledHero from '../components/styledComponents/StyledHero'

class Room extends Component {
    constructor(props) {
        super(props)

        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg,
        }
    }
    static contextType = RoomContext;

    render() {
        const { getRoom } = this.context
        const room = getRoom(this.state.slug)
        if (!room) {
            return <div className="error">
                <h3>No Such Room Found</h3>
                <Link to='/rooms' className='btn-primary'>Back To Rooms</Link>
            </div>
        }
        const { name, description, capacity, size, price, pets, images, breakfast, extras } = room

        return (
            <>
                <StyledHero img={images[0]}>
                    <Banner title={`${name} room`} >
                        <Link to='/rooms' className='btn-primary'>
                            Back To Rooms
                </Link>
                    </Banner>
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                        {images.map((image, index) => {
                            return <img key={index} src={image} alt={name} />
                        })}
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>details</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>info</h3>
                            <h6>price : ${price}</h6>
                            <h6>size : {size} SQFT</h6>
                            <h6>max-capacity : {
                                capacity > 1 ? `${capacity} people ` : `${capacity} person`} </h6>
                            <h6>{pets ? 'pets allowed' : 'no pets allowed'}</h6>
                            {breakfast && 'Free Breakfast Included'}
                        </article>
                    </div>
                </section>
                <section className="room-extras">
                    <h6>extras</h6>
                    <ul className="extras">
                        {extras.map((extra, index) => {
                            return <li key={index}>-{extra}</li>
                        })}
                    </ul>
                </section>
            </>
        )
    }
}

export default Room
