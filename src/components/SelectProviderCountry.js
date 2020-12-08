import React from 'react';

const SelectProviderCountry = (props) =>{
   //console.log(props)   
   
    return(
        <select 
            name = {props.name} 
            id = {props.name} 
            onChange={props.handleChange} 
            autoFocus = {props.autoFocus}             
            className = "select-provider"
        >       
                        {props.optionArray.map((option) =>{
    return(
        <option 
            value = {option.name} 
            key = {option.id} 
            id = {option.id}>
                {option.name}
        </option>
    )
   })}
                        
        </select>
    )
}

export default SelectProviderCountry;