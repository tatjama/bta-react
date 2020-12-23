import {useState, useEffect} from 'react';
import {useAppContext} from '../libs/contextLib';
import { commentsURL } from '../api';

const useFetchComments = (callback) => {
    const { isUserAuthenticated} = useAppContext(); 
    const [comments, setComments] = useState([]);
    const [query, setQuery] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const fetchComments = async (id) => {
         setIsError(false)
         setIsLoading(true)
         try {             
         const data = await
         fetch(`${commentsURL()}${id}`, {
             "method": "GET",
             "headers": {
                 "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
                 "x-rapidapi-key": isUserAuthenticated.rk
         }
     })
     const comments = await data.json();
     await setComments(comments.data);
     await setQuery(id);
         } catch (error) {
             setIsError(true)
         }  
     setIsLoading(false)  
  }
  useEffect(() => {       
          callback()      
  }, [query, comments])

  return{query,comments, fetchComments, isLoading, isError}
}

export default useFetchComments;