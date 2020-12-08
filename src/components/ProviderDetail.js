import React from 'react';

const ProviderDetail = (props) =>{
    
    return(
    <div className="show-provider-detail " id="showProviderDetail ">
                    <hr style={{"border":"3px solid #f1f1f1 "}}/>
     <div className="provider-detail " id="providerDetail">
            <div className="left ">
                <p>Name: {props.info.name}</p>
                <p>Country: {props.info.country}</p>
                <p>City: {props.info.city}</p>
                <p>Address: {props.info.address}</p>
                <p>Phone: {props.info.phone}</p>
                <p>Contact:{props.info.contact}</p>
            </div>
            <div className="right ">
                <h3>About company</h3>
                <p>{props.info.text}</p>
                
            </div>
        </div>
    </div>
    )
}

export default ProviderDetail;