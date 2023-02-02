import React from 'react'

const Wrapper = (props) => {
    return (
        <div className='container mx-auto py-4 px-2 min-h-screen '>{props.children}</div>
    )
}

export default Wrapper