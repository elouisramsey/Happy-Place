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
