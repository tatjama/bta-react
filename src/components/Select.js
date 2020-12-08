import React from 'react';

const Select = (props) =>{
   //console.log(props)   
   
    return(
        <select 
            name = {props.name} 
            id = {props.name} 
            onChange={props.handleChange} 
            autoFocus = {props.autoFocus} 
        >       
                        {props.optionArray.map((option) =>{
    return(
        <option 
            value = {option.value} 
            key = {option.id} 
            id = {option.id}>
                {option.name}
        </option>
    )
   })}
                        
        </select>
    )
}

export default Select;