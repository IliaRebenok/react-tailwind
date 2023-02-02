import React, { useState } from 'react'
import { ReactComponent as ArrowDownIcon } from '../../images/icon-arrow-down.svg'
import { ReactComponent as ArrowUpIcon } from '../../images/icon-arrow-up.svg'

const NavItem = (props) => {
    const [selected,setSelected] = useState('');
    return (
        <div className='relative'>
            <div className='flex space-x-2 cursor-pointer items-center '>
                <span 
                    className='text-medium-gray hover:text-almost-black'
                    onClick={() => props.children && setSelected(props.text !== selected ? props.text : '')}
                >
                    {props.text}
                </span>
                {props.children && selected !== props.text && <ArrowDownIcon />}
                {props.children && selected === props.text && <ArrowUpIcon />}
            </div>
            { selected && props.children }
        </div>
    )
}

export default NavItem