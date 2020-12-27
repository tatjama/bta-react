const base_url = 'https://tripadvisor1.p.rapidapi.com/';
const base_country_url = 'https://countries-cities.p.rapidapi.com/';


const get_comments = 'reviews/list?limit=20&currency=USD&lang=en_US&location_id=';
const get_location = 'locations/search?location_id=1&limit=30&sort=relevance&offset=0&lang=en_US&currency=USD&units=km&query=';
const get_restaurants = 'restaurants/list?restaurant_tagcategory_standalone=10591&lunit=km&restaurant_tagcategory=10591&limit=30&currency=USD&lang=en_US&location_id='
const get_airports = 'airports/search?locale=en_US&query=';
const get_country = 'location/country/';

export const base_host = 'tripadvisor1.p.rapidapi.com/';
export const commentsURL = () => `${base_url}${get_comments}`;
export const locationURL = () => `${base_url}${get_location}`;
export const restaurantsURL = () => `${base_url}${get_restaurants}`;
export const airportsURL = () => `${base_url}${get_airports}`;
export const cityURL = (city_id) => `${base_country_url}${get_country}${city_id}/city/list?page=1&per_page=100&format=json&population=100001`