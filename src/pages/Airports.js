import React from 'react';

const Airports = (props) =>{
    return(
        <div >                    
                    {console.log(props.airports)}
                    {props.airports.map((airport) => {
                        return(
                            <div key = {airport.country_code}>
                                <h1>Name: {airport.name}</h1>
                        <h2>City name: {airport.time_zone_name}</h2>
                        <h2>Code: {airport.code}</h2>
                        <h2>Display name: {airport.display_name}</h2>
                        <h2>Country: {airport.country_code}</h2>
                            </div>
                        )
                    })}
                </div>
    )
}

export default Airports;