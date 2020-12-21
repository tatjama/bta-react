import React, {useState, useEffect} from 'react';
import ProviderDetailForm from '../components/ProviderDetailForm';
//import {useAppContext} from '../libs/contextLib';
import Button from '../components/Button';
import appAvatar from '../images/travel-and-tourism.png'
import ProviderInfo from '../components/ProviderInfo';
import providersInfo from '../components/data/providersInfo';
import {scroller} from 'react-scroll';
import arrowUp from '../images/arrow-up.svg';

const initValuesForProvider = {
    id: "",
    location_id: "",
    type: "",
    category: {name: ""},
    name: "",
    country: "",
    city: "",
    address: "",
    phone: "",
    text: "",
    photo: {images: {small: {url: ""}}}
}

const Providers = ()=>{
    const [newProvider, setNewProvider] = useState(false)
    const [providersInfoArray, setProvidersInfoArray] = useState(providersInfo)

    let newProvidersInfoArrayFromLocalStorage = []
    const providersInfoArrayFromLocalStorage = JSON.parse(localStorage.getItem('providersArr')) || []
    useEffect(() => {       
    if(providersInfoArrayFromLocalStorage.length === 0){
        localStorage.setItem('providersArr', JSON.stringify(providersInfoArray))
        newProvidersInfoArrayFromLocalStorage = JSON.parse(localStorage.getItem('providersArr'))
    } else{
        newProvidersInfoArrayFromLocalStorage = JSON.parse(localStorage.getItem('providersArr'))
    }
    setProvidersInfoArray(newProvidersInfoArrayFromLocalStorage)
    }, [])

   // const { isUserAuthenticated} = useAppContext();      

    function showNewProviderForm() {
        (newProvider === false)? setNewProvider(true): setNewProvider(false)
        scrollToSection("provider-div")
    }
    const  scrollToSection = (ident) => {
        scroller.scrollTo(ident, {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
        });
      };   
     
    return(
        <div className="page-providers">
            <header className="header" id="header-providers" >
            <div id="message" style={{"color": "rgb(52, 87, 128)"}}></div>
            <Button
                name = "New Provider Form"
                handleOnClick = {showNewProviderForm}
            />
            </header>
            <div className="wrapper">                
                <div id="showTransportation">
                {newProvider 
                && <div className = "middle-wrapper">
                        <h1>Add new provider:</h1>                            
                            <div className="provider-div ">
                                <ProviderDetailForm
                                    initValues = {initValuesForProvider}
                                    logo = {appAvatar}
                                />
                            </div>
                    </div>
                }
                    <h1>Provider list:</h1>
                    {providersInfoArray.map((provider) => {
                        return(
                            <ProviderInfo
                                info = {provider}
                                key = {provider.id}
                                id = {provider.id}
                            />
                        )
                    })}
                </div>
            </div>
            <figure 
                    className = "top" 
                    onClick = {() => {scrollToSection("header")}}
                 >
                    <img src = {arrowUp} alt = "arrow up"  />
                 </figure>
        </div>

    )
}

export default Providers;