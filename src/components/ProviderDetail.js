import React from 'react';

const ProviderDetail = () =>{

    function closeProviderDetail(){
        alert("Close provider detail")
    }
    function addFeedback() {
        alert('Add feedback')
    }
    return(
    <div className="provider-detail " id="providerDetail">
        <div className="left ">
            <p>Name: AirSerbia</p>
            <p>Country: Serbia</p>
            <p>City: Belgrade</p>
            <p>Adress: Bulevar umetnosti bb</p>
            <p>Phone:+381-11-444-444</p>
            <p>Contact:</p>
        </div>
        <div className="right ">
            <h3>About company</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus neque et nulla dictum, ac scelerisque quam ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam volutpat
               viverra dolor, ac efficitur libero commodo ac. Nam venenatis sodales sollicitudin. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sed libero et purus feugiat blandit. Cras egestas lectus sit amet
               faucibus maximus. Proin non nulla lectus.
            </p>
            <button onClick = {addFeedback}>
                Add Feedback
            </button>
            <button onClick={closeProviderDetail}>
                Close Details
            </button>
        </div>
    </div>
    )
}

export default ProviderDetail;