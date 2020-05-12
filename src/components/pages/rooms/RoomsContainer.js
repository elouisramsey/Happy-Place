import React from 'react'
import { withRoomConsumer } from '../Context/Context'
import RoomsFilter from './RoomsFilter'
import RoomList from './RoomList'
import Loading from '../Loading'

const RoomsContainer = ({ context }) => {
    const { loading, sortedRooms, rooms } = context
    if (loading) {
        return <Loading />
    }
    return (
        <>
            <RoomsFilter rooms={rooms} />
            <RoomList rooms={sortedRooms} />
        </>
    )
}

export default withRoomConsumer(RoomsContainer)











// import React from 'react'
// import { RoomConsumer } from '../Context/Context'
// import RoomsFilter from './RoomsFilter'
// import RoomList from './RoomList'
// import Loading from '../Loading'

// const RoomsContainer = () => {
//     return (
//         <RoomConsumer>{
//             (value) => {
//                 const { loading, sortedRooms, rooms } = value
//                 if (loading) {
//                     return <Loading />
//                 }
//                 return (
//                     <div>
//                         <RoomsFilter rooms={rooms} />
//                         <RoomList rooms={sortedRooms} />
//                         container
//                     </div>
//                 )
//             }}
//         </RoomConsumer>
//     )
// }

// export default RoomsContainer
