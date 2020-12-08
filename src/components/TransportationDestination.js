import React from 'react';
import Select from './Select';
import useSelect from './useSelect';

const TransportationDestination = (props) =>{
    const{countries, cities, handleSelectCity, handleSelectCountry} = useSelect();
    return(
        <div className = "destination">
        {props.point/*FROM: - TO*/}:
        <br/>
        Country: 
        <Select
             handleChange = {handleSelectCountry}
             optionArray = {countries}
             autoFocus = {props.handleAutofocus/*true */}
             name = {props.pointCountries/*"fromCountries"*/}
        />
        <br/> <br/> 
        City :
            <Select
                 handleChange = {handleSelectCity}
                 optionArray = {cities}
                 autoFocus = {false}
                 name ={props.pointCities} /*"fromCities"*/
            />
            
    </div>
    )

}

export default TransportationDestination;