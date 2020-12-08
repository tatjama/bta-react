import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const Shop = () =>{

    const [cities, setCities] = useState([]);
    
// COUNTRIES:  RS-Serbia , MK- Macedonia, ME - Monte Negro, BA - Bosnia and Hercegovina, GR - Greece
// CITIES: population> 100.000
    
    const fetchItems = async() =>{
        const data  = await fetch("https://countries-cities.p.rapidapi.com/location/country/RS/city/list?page=1&per_page=20&format=json&population=100001", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "countries-cities.p.rapidapi.com",
                "x-rapidapi-key": "3a41e73b67msh3835cf67055f37bp1fcf6ejsn149531416411"
            }
        })
        const cities = await data.json();
        console.log(cities)
        setCities(cities.cities)
        console.log(cities)
    }
    

    

    return(
        <div>
            <button onClick = {fetchItems}>Show cities</button>
           {cities.map((city)=>{
               return(
                   <Link key = {city.geonameid} to={`/shop/${city.name}`}>
                  <h2 >{city.name}</h2> 
                  </Link>
               )
           })} 
        </div>
    )
}

export default Shop;
/*const fetchItems = async()=>{
        const data = await fetch("https://countries-cities.p.rapidapi.com/location/country/GB?format=json", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "countries-cities.p.rapidapi.com",
            "x-rapidapi-key": "3a41e73b67msh3835cf67055f37bp1fcf6ejsn149531416411"
        }
    })
    const items = await data.json();
    console.log(items);
    const languages = items.languages;
    console.log(languages)
    }*/