import React from 'react';
import Select from './Select';
import useSelect from './useSelect';


const SelectForm = () =>{

    const{countries, cities, handleSelectCountry, handleSelectCity} = useSelect();
     
    function chooseDestination(e) {
        e.preventDefault();
        //sent select city id to back , that thay sent information about that
        document.getElementById('start-page').style.display = "block";        
        document.getElementById('home-page').style.display = "none";
    }
    
    return(
        <form className="choose-destination">    
        <label htmlFor="countries"> Choose a country</label>             
                <Select 
                   handleChange = {handleSelectCountry}
                   optionArray = {countries}
                   autoFocus = {true}
                   name = "countries"
                />
                        <br/>
                <Select
                    handleChange = {handleSelectCity}
                    optionArray = {cities}
                    autoFocus = {false}
                    name = "cities"
                />
                <br/>
                <button type="submit" className="choose-destination-button" onClick={chooseDestination} >Select</button>
            </form>
    )
}

export default SelectForm; 

