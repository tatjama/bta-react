import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import useForm from '../hooks/useForm';
import validateSignUp from '../components/validateSignUp';

const initValuesForSignUp = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  passwordConfirm: "",
  address: "",
  addressAlternative: "",
  phone: "",
  phoneAlternative: "",
  status: 0
};

const SignUp = ()=>{
  const history = useHistory();
  const { values, handleChange, handleSubmit, handleReset, errors } 
  = useForm(submitted, validateSignUp, initValuesForSignUp);

  const [isSuccess, setIsSuccess] = useState(false);  
  
  
  function submitted() {
    alert('Submitted successfully');
    setIsSuccess(true);

    history.push('/signin');
    let usersInLocalStorageArray = [];
    usersInLocalStorageArray = JSON.parse(localStorage.getItem('usersInLocalStorage')) || []
    usersInLocalStorageArray.push(values)
    localStorage.setItem('usersInLocalStorage',JSON.stringify(usersInLocalStorageArray))
  }
   return(
      <div className = "intro-page">        
      <div className="intro-page-gradient"> 
        <form className="sign-form" id="sign-up-form" onSubmit = {handleSubmit} noValidate   >
          {isSuccess && <div className="success-message">Thank you for register</div>}
                   <fieldset className="sign-up-fieldset">     
                   <legend>SIGN UP</legend>           
                        <div id="formMain">
                           <div id="formLeft" >
                                
                                <span className="error-sign-up" title="Error. Valid name contain only letters"></span>
                                <input 
                                  type="text" 
                                  name="firstName" 
                                  className = {`${errors.firstName && "inputError"}`}
                                  placeholder=" First name - (required)" 
                                  id="sign-up-name"   
                                  value = {values.firstName}
                                  onChange = {handleChange}
                                  autoFocus
                                  required
                                />
                                {errors.firstName && <p className="error-message">{errors.firstName}</p>}
                                <span className="error-sign-up" title="Error. Valid surname contain only letters"></span>
                                <input 
                                  type="text" 
                                  name="lastName" 
                                  className = {`${errors.lastName && "inputError"}`}
                                  placeholder=" Last name - (required)" 
                                  id="sign-up-surname"  
                                  value={values.lastName}
                                  onChange = {handleChange}
                                  required
                                />
                                {errors.lastName && <p className="error-message">{errors.lastName}</p>}
                                <span className="error-sign-up" title="Error. E-mail format something@something.com"></span>
                                <input 
                                  type="email" 
                                  name="email" 
                                  className = {`${errors.email && "inputError"}`}
                                  placeholder=" E-mail - (required)" 
                                  id="sign-up-e-mail" 
                                  value = {values.email} 
                                  onChange = {handleChange}
                                  required
                                />
                                
                                {errors.email && <p className="error-message">{errors.email}</p>}
                                
                                <span className="error-sign-up" title="Error. Password format only letters and numbers"></span>
                                <input 
                                  type="password" 
                                  name="password" 
                                  className = {`${errors.password && "inputError"}`}
                                  placeholder=" Password - (required)" 
                                  id="sign-up-password" 
                                  value = {values.password} 
                                  onChange = {handleChange}
                                  required
                                />
                                {errors.password && <p className="error-message">{errors.password}</p>}
                                <span className="error-sign-up" title="Error. Password format only letters and numbers"></span>
                                <input 
                                  type="password" 
                                  name="passwordConfirm" 
                                  className = {`${errors.passwordConfirm && "inputError"}`}
                                  placeholder=" Confirm password - (required)" 
                                  id="sign-up-password-r" 
                                  value = {values.passwordConfirm} 
                                  onChange = {handleChange}
                                  required
                                />
                                {errors.password && <p className="error-message">{errors.password}</p>}
                                {errors.passwordConfirm && <p className="error-message">{errors.passwordConfirm}</p>}
                            </div>

                            <div id="formRight" >
                                
                                <span className="error-sign-up" title="Error. Address contain only letters and numbers"></span>
                                <input 
                                  type="text" 
                                  name="address" 
                                  className = {`${errors.address && "inputError"}`}
                                  placeholder=" Address 1 - (required)" 
                                  id="address1"   
                                  value = {values.address} 
                                  onChange = {handleChange}
                                  required
                                />
                              {errors.address && <p className="error-message">{errors.address}</p>}
                                <span className="error-sign-up" title="Error. Address contain only letters and numbers"></span>
                                <input 
                                  type="text" 
                                  name="addressAlternative" 
                                  className = {`${errors.addressAlternative && "inputError"}`}
                                  placeholder=" Address 2" 
                                  id="address2"  
                                  value = {values.addressAlternative}
                                  onChange = {handleChange}
                                />
                                <br/> 
                                <span className="error-sign-up" title="Error. Phone contain only numbers"></span>
                                <input 
                                  type="number" 
                                  name="phone" 
                                  minLength="11" 
                                  maxLength="15" 
                                  className = {`${errors.phone && "inputError"}`}
                                  placeholder=" Phone 1 - (required)" 
                                  id="phone1"   
                                  value = {values.phone}
                                  onChange = {handleChange}
                                  required
                                />
                                 { errors.phone && <p className="error-message">{errors.phone}</p>}
                                <span className="error-sign-up" title="Error. Phone contain only numbers"></span>
                                <input 
                                  type="number" 
                                  name="phoneAlternative" 
                                  minLength="11" 
                                  maxLength="15" 
                                  className = {`${errors.phoneAlternative && "inputError"}`}
                                  placeholder=" Phone 2" 
                                  id="phone2"   
                                  value = {values.phoneAlternative}
                                  onChange = {handleChange}
                                />
                                <br/>
                                <div style={{display:"none"}}> Status:
                                <input 
                                  type="number" 
                                  name="status" 
                                  placeholder="user" 
                                  id="status" 
                                  readOnly 
                                  value="1"
                                />
                                <br/>
                            </div>
                         </div>
                        </div>
                        <div className="buttons">
                            <button type="submit">Sign Up</button>
                            <button type="reset" onClick = {handleReset} >Clear</button>
                            <br/><br/>
                        </div>
                   </fieldset>
                </form>
                </div>
      </div>
    )
}
export default SignUp;