import React from 'react'

const Banner = ({children, title, subtitle}) => {
    return (
        <div className="banner">
            {/* How you arrange all the placements matter */}
            <h1>{title}</h1>
            <div></div>
            <p>{subtitle}</p>
            {children}
        </div>
    )
}

export default Banner
