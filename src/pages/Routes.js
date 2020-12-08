import React from "react";
import { Route, Switch} from "react-router-dom";
import SignIn from './SignIn';
import SignUp from './SignUp';
import Home from './Home';
import Life from './Life';
import Accommodation from './Accommodation'
import Enjoy from './Enjoy';
import Feedbacks from './Feedbacks'; 
import Providers from './Providers';
//import NotFound from './NotFound';
import Shop from './Shop';
import City from './City';

export default function Routes() {

  return (
        <Switch>  
            <Route path = "/signIn"  component = {SignIn}/>  
            <Route path = "/signup" component = {SignUp} />
            <Route path = "/" exact  component = {Home}/>         
            <Route path = "/life" component = {Life} />
            <Route path = "/accommodation" component = {Accommodation}/>
            <Route path = "/enjoy" component = {Enjoy}/>
            <Route path = "/feedbacks" component = {Feedbacks} />
            <Route path = "/providers" component = {Providers} />   
            <Route path = "/shop" exact component = {Shop}/>  
            <Route path = "/shop/:id" component = {City}/>          
            <Route  component = {SignIn} />   
        </Switch>
    );
}