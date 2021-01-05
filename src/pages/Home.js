import React from 'react';
import SelectForm from '../components/SelectForm';
import {useAppContext} from '../libs/contextLib';

const Home = () =>{
  const { isUserAuthenticated} = useAppContext();  
 
    return(
      <header className="header header_home">
                  <div id="message">
                    Welcome {" " +isUserAuthenticated.logInUser.firstName + " " + isUserAuthenticated.logInUser.lastName}
                  </div>
                  <SelectForm/>
              </header>            
    )
  }

  export default Home;