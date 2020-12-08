import {users} from '../data/users.json';

export default function login (values) {
    let user = {};
    let usersArray = users.concat(JSON.parse(localStorage.getItem('usersInLocalStorage')))
    for(let i = 0; i < usersArray.length; i++){       
        if(usersArray[i].email === values.email && usersArray[i].password === values.password){
            user = usersArray[i]; 
            return user
        }        
    }
    return user

}