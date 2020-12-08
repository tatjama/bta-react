import React, { useState} from 'react';
import Button from '../components/Button';
import Airports from './Airports';
import Attractions from './Attractions';
import CityInfo from './CityInfo';
import Hotels from './Hotels';
import Restaurants from './Restaurants';

const City =({match}) =>{
    console.log(match)
   // console.log(match), match is params sent from previous page
    const [info, setInfo] = useState([])  
    const [header, setHeader] = useState([])  
    const [isFetch, setIsFetch] = useState(false);
    const [isRestaurantsFetch, setIsRestaurantsFetch] = useState(false)
    const [restaurants, setRestaurants] = useState([])
    const [isHotelsFetch, setIsHotelsFetch] = useState(false)
    const [hotels, setHotels] = useState([])
    const [isAttractionsFetch, setIsAttractionsFetch] = useState(false)
    const [attractions, setAttractions] = useState([])    
    const [isAirportsFetch, setIsAirportsFetch] = useState(false)
    const [airports, setAirports] = useState([])

      
    const [items, setItems] = useState([])
    const [id, setId] = useState(null);
    
    
      
    const fetchCityInformation = async() =>{
        const data = await 
     //props is name of the city sent from previous page
            fetch(`https://tripadvisor1.p.rapidapi.com/locations/search?location_id=1&limit=30&sort=relevance&offset=0&lang=en_US&currency=USD&units=km&query=${match.params.id}`, {
	            "method": "GET",
	            "headers": {
		            "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
		            "x-rapidapi-key": "3a41e73b67msh3835cf67055f37bp1fcf6ejsn149531416411"
	            }
            })
            const info = await data.json();
            setIsFetch(true)
            console.log(info);
            setHotels(info.data.filter((hotel) => {
                return(
                    hotel.result_type === "lodging"
                )}
            ))
            setAttractions(info.data.filter((attraction) =>{
                return(
                  attraction.result_type === "things_to_do" &&
                  attraction.review_snippet
                )}
            ))
           
            setInfo(info.data);
            console.log(info)
            setHeader(info.data[0].result_object)
            console.log(header)
            setId(header.location_id);
            setItems(info.data[0].result_object.category_counts)
    }
    const fetchRestaurantInformation = async() =>{
        const data = await
        fetch(`https://tripadvisor1.p.rapidapi.com/restaurants/list?restaurant_tagcategory_standalone=10591&
        lunit=km&restaurant_tagcategory=10591&limit=30&currency=USD&lang=en_US&location_id=${header.location_id}`
        ,{
	        "method": "GET",
	        "headers": {
		        "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
		        "x-rapidapi-key": "3a41e73b67msh3835cf67055f37bp1fcf6ejsn149531416411"
	        }
        })
        const restaurants = await data.json();        
        setRestaurants(restaurants.data.filter(restaurant =>{
            return(
                restaurant.location_id !== "294472"
            )
        }))
        console.log(restaurants)
        setIsAirportsFetch(false);
        setIsAttractionsFetch(false);
        setIsHotelsFetch(false);
        setIsRestaurantsFetch(true);
    }

    const fetchHotelsInformation = () =>{        
        setIsAirportsFetch(false);
        setIsAttractionsFetch(false);
        setIsHotelsFetch(true);
        setIsRestaurantsFetch(false);
      }

    const fetchAttractionsInformation = () =>{          
        setIsAirportsFetch(false);
        setIsAttractionsFetch(true);
        setIsHotelsFetch(false);
        setIsRestaurantsFetch(false);
      }
      
    const fetchAirportsInformation = async() =>{
        const data =
        await fetch(`https://tripadvisor1.p.rapidapi.com/airports/search?locale=en_US&query=${header.name}`, {
          "method": "GET",
          "headers": {
              "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
              "x-rapidapi-key": "3a41e73b67msh3835cf67055f37bp1fcf6ejsn149531416411"
          }
      })
        const airports = await data.json();
        setAirports(airports);
        setIsAirportsFetch(true);       
        setIsAttractionsFetch(false);
        setIsHotelsFetch(false);
        setIsRestaurantsFetch(false);
    }

    const buttons = [
        {name:"Restaurants", click: fetchRestaurantInformation},
        {name: "Hotels", click: fetchHotelsInformation},
        {name: "Attractions", click: fetchAttractionsInformation},
        {name: "Airports", click: fetchAirportsInformation}
    ]

    return(
        <div>             
              <Button
                name = "Info"
                handleOnClick = {fetchCityInformation}
              />
              {isFetch && 
                <div>     
                    {//SET BUTTONS
                    buttons.map((button) => {
                        return(
                            <Button 
                                key = {button.name}
                                name = {button.name}
                                handleOnClick = {button.click}
                            />
                        )
                    })}          
                   
             <CityInfo
                header = {header}
             />
             </div>}            
             {isRestaurantsFetch &&            
                <Restaurants
                    restaurants = {restaurants}
                />
             }
             {isHotelsFetch &&
                <Hotels
                    hotels = {hotels}
                />
             }
             {isAttractionsFetch &&
               <Attractions
                    attractions = {attractions}
               />
             }
            {isAirportsFetch &&
                <Airports 
                    airports = {airports}
                />                
            }                 
        </div>    
    )
}

export default City;