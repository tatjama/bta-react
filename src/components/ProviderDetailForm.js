import React, {useState} from 'react';
import useForm from '../hooks/useForm';
import validateProviderDetailForm from './utils/validateProviderDetailForm';
import SelectTypeOfProvider from './SelectTypeOfProvider';
import SelectProviderCountry from './SelectProviderCountry';
import {countriesArray} from './data/countries.json';

const typeArray = ["Airplane", "Bus", "Train", "Taxi","Rent a car", "Company car"];
const countries = countriesArray;

const ProviderDetailForm = (props) =>{
    const [isSuccess, setIsSuccess] = useState(false);  

    const { values, handleChange, handleSubmit, handleReset, errors } 
  = useForm(submitted, validateProviderDetailForm, props.initValues);    
  
  function submitted() {
    alert('Submitted successfully');
    setIsSuccess(true);
    values.id = values.name;
    values.location_id = values.name;
    values.category.name = values.type;
    values.photo.images.small.url = props.logo  ;
    let providersInLocalStorageArray = [];
    providersInLocalStorageArray = JSON.parse(localStorage.getItem('providersArray'));
    function findProviderById(provider){
        return provider.id !== values.id
    }
    const providers = providersInLocalStorageArray.filter(findProviderById)
    localStorage.removeItem('providersArray')
    providers.push(values);
    localStorage.setItem('providersArray', JSON.stringify(providers))
  }

    return( 
    <>{     !isSuccess
        && <form className="show-provider-edit " id="showEditProvider" onSubmit = {handleSubmit} noValidate> 
                            <hr style={{"border":"3px solid #f1f1f1 "}}/>
         <div className="provider-detail-form " id="providerDetail">
            <div className="left ">
                <p>Type:</p>
                <SelectTypeOfProvider 
                   handleChange = {handleChange}
                   optionArray = {typeArray}
                   autoFocus = {true}
                   name = "type"
                   required = {true}
                   placeholder = "Choose type of transport"
                />
                {errors.type && <p className = "error-message-comment">{errors.type}</p>}
                             <br/>
                              
                <p>Provider name:</p>
                <input 
                    type="text"
                    name = "name"
                    className = {`${errors.name && "inputError"}`}
                    placeholder = "Provider name - (required)"
                    id = "provider-form-name"
                    value = {values.name}
                    onChange = {handleChange}
                    required = {true}
                />
                {errors.name && <p className = "error-message-comment">{errors.name}</p>}
                
                <p>Country:</p>
                <SelectProviderCountry
                   handleChange = {handleChange}
                   optionArray = {countries}
                   name = "country"
                   required = {true}
                   placeholder = "Choose country"
                />
                {errors.country && <p className = "error-message-comment">{errors.country}</p>}
                <p>City:</p>
                <input 
                    type="text"
                    name = "city"
                    className = {`${errors.city && "inputError"}`}
                    placeholder = "City"
                    id = "provider-form-city"
                    value = {values.city}
                    onChange = {handleChange}
                    required = {true}
                />
                {errors.city && <p className = "error-message-comment">{errors.city}</p>}
                <p>Address:</p>
                <input 
                    type="text"
                    name = "address"
                    className = {`${errors.address && "inputError"}`}
                    placeholder = "Provider address - (required)"
                    id = "provider-form-address"
                    value = {values.address}
                    onChange = {handleChange}
                    required = {true}
                />
                {errors.address && <p className = "error-message-comment">{errors.address}</p>}
                <p>Phone:</p>
                <input 
                                  type="number" 
                                  name="phone" 
                                  minLength="8" 
                                  maxLength="35" 
                                  className = {`${errors.phone && "inputError"}`}
                                  placeholder=" Phone 1 - (required)" 
                                  id="phone1"   
                                  value = {values.phone}
                                  onChange = {handleChange}
                                  required = {true}
                                />
                                 { errors.phone && <p className="error-message-comment">{errors.phone}</p>}
                            
            </div>
            <div className="right ">
                <h3>About company</h3>
                <textarea  
                    rows="20" 
                    cols = "50"
                    name = "text" 
                    placeholder="Place for your comment..."
                    onChange = {handleChange}
                    value = {values.text}
                    className = {`${errors.text && 'inputError'}`}
                    required = {true}                >
                </textarea>
                {errors.text && <p className = "error-message-comment">{errors.text}</p>}                
            </div>
            <div>
                <button type="submit">Submit</button>                
                <button type="reset" onClick = {handleReset} >Clear</button>
            </div>
        </div>
    
        </form>
        }
    </>        
    )
}

export default ProviderDetailForm;