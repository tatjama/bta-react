import React from 'react';
import logoAirplane from '../images/logoavio1.webp';;

const ProviderHeading = () =>{
    function showProviderDetail(){
        alert("Show provider detail")
    }
    function showProviderEdit(){
        alert ("Show provider Edit")
    }
    return(
        <div className="provider-heading ">
            <div className="left">
                <img className="provider-logo " src={logoAirplane} alt = "Air Serbia logo"/>
                <h2>Provider name: AirSerbia
                                    <br/>
                Type: Airplane
                </h2>
            </div>
            <div className="right">
                <span className="heading ">User Rating</span>
                <span className="fa fa-star checked "></span>
                <span className="fa fa-star checked "></span>
                <span className="fa fa-star checked "></span>
                <span className="fa fa-star "></span>
                <span className="fa fa-star "></span>
                <p>4.1 average based on 254 reviews.</p>
                <button onClick={showProviderDetail}> Details</button>
                <button onClick={showProviderEdit} >Edit</button>
            </div>
        </div>
    )
}

export default ProviderHeading;