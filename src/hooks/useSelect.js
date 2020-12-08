import { cleanup } from '@testing-library/react';
import {useState, useEffect} from 'react';
import {countriesArray} from '../components/data/countries.json';
import {useAppContext} from '../libs/contextLib';

const countries = countriesArray;

const useSelect = (callback) =>{
    const [country, setCountry] = useState(countries[0]);    
    const [cities, setCities] = useState([]);
    const [city, setCity] = useState({geonameid: 1141857, name: "Gardez"});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const {isUserAuthenticated} = useAppContext()
    let chosenCity = {}
          
    console.log(country)

 const handleSelectCountry = (e) =>{        
      setCountry(countries[e.target.value]);
      
 }
 useEffect(() => {
     console.log(country);  
     const fetchCities = async(id) =>{
        setIsError(false)  
        setIsLoading(true) 
       try {
        const data  = await fetch(`https://countries-cities.p.rapidapi.com/location/country/${id}
        /city/list?page=1&per_page=20&format=json&population=100001`
        , {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "countries-cities.p.rapidapi.com",
                "x-rapidapi-key": isUserAuthenticated.rkcc
            }
        })
        const cities = await data.json();
       // console.log(cities.cities.length);
        console.log(cities)
        await setCities(cities.cities)
        console.log(cities)  
       } catch (error) {
           setIsError(true)
       }
            
        setIsLoading(false)   
    }
     fetchCities(country.id);
     //ERROR HANDLE     
     //!cities? alert("Nema grada"):
     // setCities(cities);
    // console.log(cities)
        
     },[country])

 const handleSelectCity = (e) =>{     
     console.log(e.target.value)
     console.log(cities)
     cities.map((city) => {
        // console.log(city.geonameid)
         //console.log(e.target.value)
        if(city.geonameid === parseInt(e.target.value)){
            chosenCity = city;           
        }return chosenCity
     })
     
     setCity(chosenCity);
 }
 useEffect(() => {
     console.log(city)
 },[city])      

 const handleSubmit =(e) => {
     console.log("useState submit")
     e.preventDefault();
     setIsSubmitted(true)
 }
 useEffect(() => {
     if(Object.keys(city) !== 0 && isSubmitted){
         callback()
         cleanup(setIsSubmitted(false))
     }
 },[isSubmitted])
 

    return{
        countries,
        country,
        cities,
         city,
         handleSelectCountry,
         handleSelectCity,
         handleSubmit,
         isLoading,
         isError
    }

}

export default useSelect;

