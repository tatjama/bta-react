import React from 'react';
import SelectForm from '../components/SelectForm';
import {useAppContext} from '../libs/contextLib';

const Home = () =>{
  const { isUserAuthenticated} = useAppContext();      
  console.log( isUserAuthenticated)

    return(
      <header className="header" id="header-home">
                  <div id="message">Welcome to App </div>
                  <SelectForm/>
              </header>            
    )
  }

  export default Home;