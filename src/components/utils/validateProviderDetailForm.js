export default function validateProviderDetailForm(values) {
    let errors = {};
    if(!values.type){
        errors.type = "Type is required"
    }
    if(!values.name){
        errors.name = "Name is required!";        
    }else if(!/[A-Z][a-zA-Z][^#&<>"~;$^%{}?]{1,20}$/.test(values.name)){
        errors.name = "Name is invalid!";
    }
    if(!values.country){
        errors.country = "Country is required"
    }
    if(!values.city){
        errors.city = "City is required!";        
    }else if(!/[A-Z][a-zA-Z][^#&<>"~;$^%{}?]{1,20}$/.test(values.city)){
        errors.city = "City is invalid!";
    }
    if(!values.address){
        errors.address = "Address is required!";        
    }else if(!/[A-Z][a-zA-Z][^#&<>"~;$^%{}?]{1,20}$/.test(values.address)){
        errors.address = "Address is invalid!";
    }
    if(!values.phone){
        errors.phone = "Phone  is required!";        
    }else if(!/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/.test(values.phone)){
        errors.phone = "Phone is invalid!";
    }
    if(!values.text){
        errors.text = "About provider text is required!";
    }
    return errors;
}