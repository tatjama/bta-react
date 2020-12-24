import React, { useState, useEffect} from 'react';
import Button from '../components/Button';
import { useAppContext } from '../libs/contextLib';
import Airports from './Airports';
import Attractions from './Attractions';
import CityInfo from './CityInfo';
import Hotels from './Hotels';
import Restaurants from './Restaurants';
import SelectForm from '../components/SelectForm';
import SectionFirst from '../components/SectionFirst';
import breakfast from '../images/breakfast.png';
import hotel from '../images/hotel.png';
import world from '../images/world.png';
import airplane from '../images/airplane.png';
import {scroller} from 'react-scroll';
import arrowUp from '../images/arrow-up.svg';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
//api url:
import { locationURL, restaurantsURL, airportsURL } from '../api';

const City =({match}) =>{   
    const [header, setHeader] = useState([])  
    const [isFetch, setIsFetch] = useState(false);
    const [isRestaurantsFetch, setIsRestaurantsFetch] = useState(false)
    const [restaurants, setRestaurants] = useState([])
    const [isHotelsFetch, setIsHotelsFetch] = useState(false)
    const [hotels, setHotels] = useState([])
    const [isAttractionsFetch, setIsAttractionsFetch] = useState(false)
    const [attractions, setAttractions] = useState([])    
    const [isAirportsFetch, setIsAirportsFetch] = useState(false)
    const [airports, setAirports] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const {isUserAuthenticated} = useAppContext();
    const [position, setPosition] = useState("horizontalPosition");

    const scrollFunction = () => {
        (window.scrollY > 850)? setPosition("verticalPosition"): setPosition("horizontalPosition")        
    }

    useEffect(() => {
        window.onscroll = function() {scrollFunction()};
    }, [])

    const  scrollToSection = (ident) => {
        scroller.scrollTo(ident, {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
        });
      };

    const fetchCityInformation = async() =>{
        setIsError(false)
        setIsLoading(true)
        setIsFetch(false)
        setIsAirportsFetch(false);
        setIsAttractionsFetch(false);
        setIsHotelsFetch(false);
        setIsRestaurantsFetch(false);
        try {            
        const data = await 
        //props is name of the city sent from previous page
               fetch(`${locationURL()}${match.params.id}`, {
                   "method": "GET",
                   "headers": {
                       "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
                       "x-rapidapi-key": isUserAuthenticated.rk
                   }
               })
               
               const info = await data.json();
               setIsFetch(true)
               await setHeader(info.data[0].result_object)
   
               setHotels(info.data.filter((hotel) => {
                   return(
                       hotel.result_type === "lodging"
                       && hotel.result_object.photo //if hotel image does not exist filter hotels
                       && hotel.review_snippet
                   )}
               ))
               setAttractions(info.data.filter((attraction) =>{
                   return(
                     attraction.result_type === "things_to_do" 
                     && attraction.result_object.photo
                     && attraction.review_snippet// if review snippet does not exist                  
                   )}
               ))            
        } catch (error) {
            setIsError(true)
        }             
        setIsLoading(false)    
        scrollToSection("section-first")   
    }
    const fetchRestaurantInformation = async() =>{
        setIsError(false)
        setIsLoading(true)
        try {
            const data = await
        fetch(`${restaurantsURL()}${header.location_id}`, {
	        "method": "GET",
	        "headers": {
		        "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
		        "x-rapidapi-key": isUserAuthenticated.rk
	        }
        })
        const restaurants = await data.json();    
        setRestaurants(restaurants.data.filter(restaurant =>{
            return(
                restaurant.location_id !== "294472" &&
                restaurant.photo //if photo does not exist
            )
        }))
        setIsAirportsFetch(false);
        setIsAttractionsFetch(false);
        setIsHotelsFetch(false);
        setIsRestaurantsFetch(true);
        
            
        } catch (error) {
            setIsError(true)
        }
        setIsLoading(false)
        scrollToSection("restaurants")
    }

    const fetchHotelsInformation = async() =>{        
        setIsAirportsFetch(false);
        setIsAttractionsFetch(false);
        await setIsHotelsFetch(true);
        setIsRestaurantsFetch(false);
        scrollToSection("hotels");
      }

    const fetchAttractionsInformation = async () =>{   
        setIsError(false)  
        try {
        setIsAirportsFetch(false);
        await setIsAttractionsFetch(true);
        setIsHotelsFetch(false);
        setIsRestaurantsFetch(false);
            
        } catch (error) {
            setIsError(true)
        }     
        
        scrollToSection("attractions")
      }
      
    const fetchAirportsInformation = async() =>{
        setIsError(false)
        setIsLoading(true)
        try {
            const data =
        await fetch(`${airportsURL()}${header.name}`, {
          "method": "GET",
          "headers": {
              "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
              "x-rapidapi-key": isUserAuthenticated.rk
          }
      })
        const airports = await data.json();
        setAirports(airports);
        setIsAirportsFetch(true);       
        setIsAttractionsFetch(false);
        setIsHotelsFetch(false);
        setIsRestaurantsFetch(false);
        
            
        } catch (error) {
            setIsError(true)
        }
        setIsLoading(false)
        scrollToSection("airports")
    }
    const figureProps =  [
    {
        name: "Restaurants", 
        source: breakfast,
        handleOnClick: fetchRestaurantInformation,
        alt: "breakfast" ,
        go: "#food"
    },
    {
        name: "Hotels", 
        source: hotel, 
        handleOnClick: fetchHotelsInformation,
        alt: "friends hands" ,
        go: "#safety"
    },
    {
        name: "Attractions" ,
        source: world, 
        handleOnClick: fetchAttractionsInformation,
        alt: "world" ,
        go: "#culture"
    },
    {
        name: "Airports", 
        source: airplane, 
        handleOnClick: fetchAirportsInformation,
        alt: "airplane" ,
        go: "#airport"
    }]

       
    
    
    return(
        <div>     
             <header className="header" id="header-life" >
                <div id="message"></div>        
                 <SelectForm />          
            </header>
                <Button
                    className = "life-button"
                    name = {`Show information about ${match.params.id}`} 
                    handleOnClick = {fetchCityInformation}
                />
                <div >
                    {isError && <div className = "error">Error. Something went wrong...</div>}
                    {isLoading?
                    <div className = "loader">
                    <Loader type="Grid"
                    color="#00BFFF"
                    height={40}
                    width={40} />
                    </div>
                    :
                    <div>
                    {isFetch && 
                        <div className = "wrapper" >
                            <h3>Life in different countries....</h3>
                                <SectionFirst info = {figureProps} position = {position}/>
                            <div >                      
                                <CityInfo header = {header}/>
                            </div>                      
                        </div>  
                        }  
                    </div>
                    }          
                    {isRestaurantsFetch &&   
                        <div className = "wrapper">         
                            <Restaurants restaurants = {restaurants} />
                        </div>
                    }
                    
                    {isHotelsFetch &&
                        <div className = "wrapper">  
                            <Hotels hotels = {hotels} />
                        </div>
                    }
                    {isAttractionsFetch &&
                        <div className = "wrapper">  
                            <Attractions attractions = {attractions} />
                        </div>
                    }
                    {isAirportsFetch &&
                        <div className = "wrapper">  
                            <Airports airports = {airports}/> 
                        </div>               
                    }              
                 </div>
                 <figure 
                    className = "top" 
                    onClick = {() => {scrollToSection("section-first")}}
                 >
                    <img src = {arrowUp} alt = "arrow up"  />
                 </figure>
                 
        
        </div>    
    )
}

export default City;