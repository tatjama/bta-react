import {useState, useEffect} from 'react';

 const useForm = (callback, validate, initValues) => {     
     
    const [values, setValues] = useState(initValues);
    const [errors, setErrors] = useState({});    
    const [isSent, setIsSent] = useState(false);  
    const [isSubmitting, setIsSubmitting] = useState(false);     
    
      const handleChange = (e)=>{
        const {name, value} = e.target;
        setIsSubmitting(false);
        const newValues = {...values, [name]: value};       
        isSent && setErrors(validate(newValues));
        setValues(values =>(newValues));
      };     
    
      const handleSubmit = (e)=>{
        e.preventDefault();
        setErrors(validate(values)); 
        setIsSubmitting(true);
        setIsSent(true);          
       }   

      useEffect(()=>{ 
          if(Object.keys(errors).length === 0 
          && isSubmitting 
          && isSent           
           ){
             callback(                      
                setValues(initValues)
              )
          }
      }, [errors, isSent, isSubmitting, initValues])        

      const handleReset = (e)=>{
        setValues(initValues);
      }

   return{
    values,
    handleChange,
    handleSubmit,
    handleReset,
    errors,
    isSubmitting
} 
}

export default useForm;