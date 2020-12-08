export default function validateSignIn(values) {
    let errors = {};

    if(!values.email){
        errors.email = "E-mail is required!";
    }else if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email)){
        errors.email = "E-mail is invalid!"
    }
    if(!values.password){
        errors.password = "Password is required!";
    }else if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(values.password)){
        errors.password = "Password is invalid!"
        /*HAVE TO FIND BETTER ERROR-MESSAGE
        errors.password = "Password must contain number, uppercase, lowercase and at least 8 characters"*/
    }

    return errors;
}