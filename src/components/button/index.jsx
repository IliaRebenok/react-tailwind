import React from 'react'

const borderStyles = 'border-2 border-almost-black rounded-lg';
const filledStyles = 'text-white bg-black rounded-lg font-bold py-4 px-6 mx-0 hover:bg-transparent hover:text-almost-black border-2 border-almost-black'

const Button = (props) => {
  return (
    <button className={`text-medium-gray px-5 py-2 ${props.hasBorder && borderStyles} ${props.isFilled && filledStyles}`}>
        {props.children}
    </button>
  )
}

export default Button