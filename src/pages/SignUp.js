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
        <form className="sign-form sign-form_up" onSubmit = {handleSubmit} noValidate   >
          {isSuccess && <div className="success-message">Thank you for register</div>}
                   <fieldset className="sign-form__fieldset sign-up-fieldset">     
                   <legend className = "sign-form__legend">SIGN UP</legend>           
                        <div className = "sign-form__container" id="formMain">
                           <div className = "sign-form__left" id="formLeft" >
                                
                                <span className="error-sign-up" title="Error. Valid name contain only letters"></span>
                                <input 
                                  type="text" 
                                  name="firstName" 
                                  className = {`sign-form__input sign-form__input_up ${errors.firstName && "sign-form__input_error"}`}
                                  placeholder=" First name - (required)" 
                                  id="sign-up-name"   
                                  value = {values.firstName}
                                  onChange = {handleChange}
                                  autoFocus
                                  required
                                />
                                {errors.firstName && <p className="sign-form__message_error">{errors.firstName}</p>}
                                <span className="error-sign-up" title="Error. Valid surname contain only letters"></span>
                                <input 
                                  type="text" 
                                  name="lastName" 
                                  className = {`sign-form__input sign-form__input_up ${errors.lastName && "sign-form__input_error"}`}
                                  placeholder=" Last name - (required)" 
                                  id="sign-up-surname"  
                                  value={values.lastName}
                                  onChange = {handleChange}
                                  required
                                />
                                {errors.lastName && <p className="sign-form__message_error">{errors.lastName}</p>}
                                <span className="error-sign-up" title="Error. E-mail format something@something.com"></span>
                                <input 
                                  type="email" 
                                  name="email" 
                                  className = {`sign-form__input sign-form__input_up ${errors.email && "sign-form__input_error"}`}
                                  placeholder=" E-mail - (required)" 
                                  id="sign-up-e-mail" 
                                  value = {values.email} 
                                  onChange = {handleChange}
                                  required
                                />
                                
                                {errors.email && <p className="sign-form__message_error">{errors.email}</p>}
                                
                                <span className="error-sign-up" title="Error. Password format only letters and numbers"></span>
                                <input 
                                  type="password" 
                                  name="password" 
                                  className = {`sign-form__input sign-form__input_up ${errors.password && "sign-form__input_error"}`}
                                  placeholder=" Password - (required)" 
                                  id="sign-up-password" 
                                  value = {values.password} 
                                  onChange = {handleChange}
                                  required
                                />
                                {errors.password && <p className="sign-form__message_error">{errors.password}</p>}
                                <span className="error-sign-up" title="Error. Password format only letters and numbers"></span>
                                <input 
                                  type="password" 
                                  name="passwordConfirm" 
                                  className = {`sign-form__input sign-form__input_up ${errors.passwordConfirm && "sign-form__input_error"}`}
                                  placeholder=" Confirm password - (required)" 
                                  id="sign-up-password-r" 
                                  value = {values.passwordConfirm} 
                                  onChange = {handleChange}
                                  required
                                />
                                {errors.password && <p className="sign-form__message_error">{errors.password}</p>}
                                {errors.passwordConfirm && <p className="sign-form__message_error">{errors.passwordConfirm}</p>}
                            </div>

                            <div className = "sign-form__right" id="formRight" >
                                
                                <span className="error-sign-up" title="Error. Address contain only letters and numbers"></span>
                                <input 
                                  type="text" 
                                  name="address" 
                                  className = {`sign-form__input sign-form__input_up ${errors.address && "sign-form__input_error"}`}
                                  placeholder=" Address 1 - (required)" 
                                  id="address1"   
                                  value = {values.address} 
                                  onChange = {handleChange}
                                  required
                                />
                              {errors.address && <p className="sign-form__message_error">{errors.address}</p>}
                                <span className="error-sign-up" title="Error. Address contain only letters and numbers"></span>
                                <input 
                                  type="text" 
                                  name="addressAlternative" 
                                  className = {`sign-form__input sign-form__input_up ${errors.addressAlternative && "sign-form__input_error"}`}
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
                                  className = {`sign-form__input sign-form__input_up ${errors.phone && "sign-form__input_error"}`}
                                  placeholder=" Phone 1 - (required)" 
                                  id="phone1"   
                                  value = {values.phone}
                                  onChange = {handleChange}
                                  required
                                />
                                 { errors.phone && <p className="sign-form__message_error">{errors.phone}</p>}
                                <span className="error-sign-up" title="Error. Phone contain only numbers"></span>
                                <input 
                                  type="number" 
                                  name="phoneAlternative" 
                                  minLength="11" 
                                  maxLength="15" 
                                  className = {`sign-form__input sign-form__input_up ${errors.phoneAlternative && "sign-form__input_error"}`}
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
                                  className = "sign-form__input sign-form__input_up"
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
                            <button className = "sign-form__button" type="submit">Sign Up</button>
                            <button className = "sign-form__button" type="reset" onClick = {handleReset} >Clear</button>
                            <br/><br/>
                        </div>
                   </fieldset>
                </form>
                </div>
      </div>
    )
}
export default SignUp;