import jwt_decode from "jwt-decode";

export function isUserLoggedIn() {
    const token = localStorage.getItem('token');
    if(token) {
        const user = jwt_decode(token);
        return true;
    }
    else {
        return false;
    }
}

export function getCurrentUserEmailId() {
    const token = localStorage.getItem('token');
    if(token) {
        const user = jwt_decode(token);
        return user.email;
    }
    else {
        return false;
    }   
}