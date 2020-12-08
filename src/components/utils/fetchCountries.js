 const fetchCountries = async() => {
    const data = await
    fetch("https://countries-cities.p.rapidapi.com/location/country/list?format=json", {
"method": "GET",
"headers": {
    "x-rapidapi-host": "countries-cities.p.rapidapi.com",
    "x-rapidapi-key": "3a41e73b67msh3835cf67055f37bp1fcf6ejsn149531416411"
}
})
const countries = await data.json();
//setCountries(countries.countries);
let i = 0;
let newArray = [];
Object.entries(countries.countries).map(([key, value]) => {                 
    let country = {value: i++, id: key, name: value, cities: [
        {value: 0, id: "country2-city0", name: "Belgrade"}, 
        {value: 1, id: "country2-city1", name: "Nis"},
        {value: 2, id: "country2-city2", name: "Kraljevo"}, 
        {value: 3, id: "country2-city3",  name: "Novi Sad"}, 
        {value: 4, id: "country2-city4",  name: "Valjevo"}, 
        {value: 5, id: "country2-city5",  name: "Cacak"}
    ]}
   // console.log(key)
    //console.log(value)
    //setCountry(country)
    //console.log(country)    
    newArray.push(country) 
    //console.log(newArray)     
})
console.log(newArray)
return(newArray) 


}

export default fetchCountries;