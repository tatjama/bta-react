import React from 'react';
import {useHistory} from 'react-router-dom';
import useForm from '../hooks/useForm';
import validateSignIn from '../components/validateSignIn';
import {useAppContext} from '../libs/contextLib';
import login from "../components/utils/login";

const initValuesForSignIn = {
  email: '',
  password: '',
  status: 0
};

const SignIn = () => {
  const history = useHistory();
  const { setUserHasAuthenticated} = useAppContext();
  const { values, handleChange, handleSubmit, handleReset, errors } = useForm(submitted, validateSignIn, initValuesForSignIn, login);
  
 async  function submitted() {  
    try{
     const user = await   login(values);
     if(Object.keys(user).length !==0){
      alert('Submitted successfully');      
      sessionStorage.setItem('logInUser', JSON.stringify(user)) ;
      setUserHasAuthenticated({
              isAuthenticated:true,
              logInUser: user,
              rk:`${process.env.REACT_APP_RAPIDAPI_API}`,
              rkcc: `${process.env.REACT_APP_RAPIDAPI_CITY_COUNTRY_API}`
            });        
      history.push("/");
     }else{
       alert('invalid user')
     }     
      }catch{
        alert("User name or password is not valid")
      }
    }     
    
    return(
    <div className = "intro-page">        
      <div className="intro-page-gradient">           
        <form className="sign-form sign-form_in" onSubmit = {handleSubmit}  noValidate >
          <fieldset className="sign-form__fieldset">
            <legend className="sign-form__legend">Sign in</legend>
            <br/>
            <span className="error-sign-in"  title="Error. E-mail format something@something.com"></span>
            <input 
                type="email"                 
                name = "email"
                className = {`sign-form__input ${errors.email && "sign-form__input_error"}`}
                placeholder = " E-mail "
                id="sign-in-e-mail" 
                value = {values.email}
                onChange = {handleChange}
                autoFocus
                required = {true}                
            />
            <br/>
             {errors.email && <p className="sign-form__message_error">{errors.email}</p>}
            <span className="error-sign-in"  title="Error. Password format only recive letters and numbers"></span>
            <input 
                type="password"                 
                name="password"
                className={`sign-form__input ${errors.password && "sign-form__input_error"}` }
                placeholder = " Password "
                id="sign-in-password"
                value = {values.password}
                onChange = {handleChange} 
                required = {true}                
            />
            {errors.password && <p className = "sign-form__message_error">{errors.password}</p>}
            <br/>
            <br/>            
            <button className = "sign-form__button" type="submit" >Sign in </button>
            <button className = "sign-form__button" type="reset" onClick = {handleReset}>Clear</button>
        </fieldset>
      </form>      
    </div>
    </div>
    )
}

export default  SignIn;