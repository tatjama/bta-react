import React from 'react';

const ProviderDetailForm = () =>{
    function closeProviderEdit() {
        alert('Close provider Edit')
    }
    return(
        <div className="provider-detail-form " id="providerDetail">
            <div className="left ">
                <p>Type:</p>
                             <br/>
                <input list="typeProvider" name="typeProvider"/>
                <datalist id="typeProvider">       
                <option value="Airplane"/>
                                            <option value="Bus"/>
                                            <option value="Company car"/>
                                            <option value="Rent a car"/>
                                            <option value="Train"/>
                                            <option value="Taxi"/>  
                </datalist>
                <p>Name:</p><input type="text"/>
                <p>Country:</p><input type="text"/>
                <p>City:</p><input type="text"/>
                <p>Street name:</p><input type="text"/>
                <p>Street number:</p><input type="number"/>
                <p>Phone:</p><input type="text"/>
            </div>
            <div className="right ">
                <h3>About company</h3>
                <textarea cols="50" rows="20"></textarea>
                                    <br/>
                <button onClick={closeProviderEdit}>Close Edit</button>
                <button type="submit">Submit</button>
            </div>
        </div>
    )
}

export default ProviderDetailForm;