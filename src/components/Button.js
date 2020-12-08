import React from 'react'

const Button = (props) => {
    return(
        <button onClick = {props.handleOnClick}>
            {props.name}
        </button>
    )
}
export default Button;