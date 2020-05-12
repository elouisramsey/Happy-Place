import React from 'react'
import LoadingArrow from '../../images/gif/loading-arrow.gif'

const Loading = () => {
    return (
        <div className='loading'>
            <h4>Rooms Data Loading...</h4>
            <img src={LoadingArrow} alt="Loading Arrow" />
        </div>
    )
}

export default Loading
