import React from 'react'

const MenuItem = (props) => {
    return (
        <div className='flex w-full space-x-4'>
            {props.icon}
            <span className='text-medium-gray hover:text-almost-black cursor-pointer'>{props.text}</span>
        </div>
    )
}

export default MenuItem