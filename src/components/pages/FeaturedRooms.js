import React, { Component } from 'react'
import { RoomContext } from './Context/Context'
import Loading from './Loading';
import RoomData from './RoomData';
import Title from './Title';

class FeaturedRooms extends Component {
    static contextType = RoomContext;

    render() {
        let { loading, featuredRooms: rooms } = this.context

        rooms = rooms.map(room => {
            return <RoomData key={room.id} room={room} />
        })

        return (
            <section className='featured-rooms'>
                <Title title='Featured Rooms' />
                <div className="featured-rooms-center">
                    {loading ? <Loading /> : rooms}
                </div>
            </section>
        )
    }

}

export default FeaturedRooms
