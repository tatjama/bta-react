import React from 'react';
import Select from './Select';
import useSelect from '../hooks/useSelect';
import {useHistory} from 'react-router-dom';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';


const SelectForm = () =>{
    const history = useHistory();
    const{city, countries, country, cities, handleSelectCountry, handleSelectCity, handleSubmit, isLoading, isError, isCities} 
    = useSelect(submitted);
    
     function submitted(){
        history.push(`/${city.name}`)
    }

    
    return(
        <form className="select-form" onSubmit = {handleSubmit}>    
        <label className="select-form__label" htmlFor="countries"> Choose a country</label>             
                <Select 
                   handleChange = {handleSelectCountry}
                   optionArray = {countries}
                   autoFocus = {true}
                   name = "countries"
                />
                        <br/>
                {isError && <div className = "error">Error. Something went wrong...
                {country.name} doesn't have a city over 100,000 citizens.
                    <br/> Please select another country
                </div>}
                {isLoading?
                    <div className = "loader"><Loader type="Grid" color="#bae7e7" height={40} width={40} /></div>
                :                
                <Select
                    handleChange = {handleSelectCity}
                    optionArray = {cities}
                    autoFocus = {false}
                    name = "cities"
                />
                }
                <br/>
                <button type="submit" className="select-form__button" >Select</button>
                { isCities && <p className = "select-form__pop-up_error">
                    {country.name} doesn't have a city over 100,000 citizens.
                    <br/> Please select another country
                </p>}
            </form>
    )
}

export default SelectForm; 

