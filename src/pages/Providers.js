import React from 'react';
import SelectForm from '../components/SelectForm';
import ProviderHeading from '../components/ProviderHeading';
import ProviderDetail from '../components/ProviderDetail';
import ProviderDetailForm from '../components/ProviderDetailForm';
import {useAppContext} from '../libs/contextLib';

const Providers = ()=>{
    const { isUserAuthenticated} = useAppContext();      
    console.log( isUserAuthenticated)
     
    return(
        <div className="page-providers">
            <header className="header" id="header-providers" >
            <div id="message" style={{"color": "rgb(52, 87, 128)"}}></div>
            <SelectForm/>
            </header>

            <div className="wrapper">
                <div id="showTransportation">
                    <h1>Provider list:</h1>
                    <div className="middle-wrapper ">
                        <div className="provider-div ">
                            <ProviderHeading/>
                            <div className="show-provider-detail " id="showProviderDetail ">
                                <hr style={{"border":"3px solid #f1f1f1 "}}/>
                                 <ProviderDetail/>
                            </div>
                        <form className="show-provider-edit " id="showEditProvider" >
                            <hr style={{"border":"3px solid #f1f1f1 "}}/>
                            <ProviderDetailForm/>                            
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Providers;