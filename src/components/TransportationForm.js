import React from 'react';
import TransportationType from './TransportationType';
import TransportationDestination from './TransportationDestination';

const TransportationForm = () =>{

    function showTransportation(){
        //sent selected city from and to
        alert('show transportation')
    }

    return(
        <form id="formTransportation">
            <fieldset>
                <legend>Transportation</legend>
                    <div id="transportationFromTo">
                        <TransportationDestination
                        point = "from"
                        handleAutofocus = {true}
                        pointCountries = "fromCountries"
                        pointCities = "fromCities"
                        />
                        <TransportationDestination
                        point = "to"
                        handleAutofocus = {false}
                        pointCountries = "toCountries"
                        pointCities = "toCities"
                        />
                        <TransportationType/>
                        <div>
                            <br/><br/>
                            <button type="submit" onClick={showTransportation}>Submit</button>
                            <button type="reset">Clear</button>
                        </div>
                   </div>
            </fieldset>
        </form>
    )
}

export default TransportationForm;

