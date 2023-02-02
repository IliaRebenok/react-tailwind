import React from 'react'

const Wrapper = (props) => {
    return (
        <div className='mx-auto py-4 px-2 container min-h-screen '>
            {props.children}
        </div>
    )
}

export default Wrapper