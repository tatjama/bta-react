import React from 'react';

const TransportationType = () =>{
    return(
        <div id="type">
        Transportation Type
        <br/> 
        <input type="radio" name="transportationType" id="airplane"/>
        <span>Airplane    </span>
        <br/>                        
        <input type="radio" name="transportationType" id="bus"/>
        <span>BUS</span>
        <br/> 
        <input type="radio" name="transportationType" id="companyCar"/>
        <span>Company car    </span>
        <br/>                        
        <input type="radio" name="transportationType" id="rentACar"/>
        <span>Rent a car</span>
        <br/>
        <input type="radio" name="transportationType" id="train"/>
        <span>Train   </span>
        <br/>                        
        <input type="radio" name="transportationType" id="taxi"/>
        <span>Taxi</span>
    </div>
    )
}

export default TransportationType;