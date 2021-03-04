import React from 'react'

const Band =(props) => {
    let renderBands = props.bands.map((band, index) => {
        return <li key={index}>{band.name}</li>})

    return(
        <ul>
        {renderBands}
        </ul>
    )
}

export default Band 