import axios from 'axios';

const url = 'http://localhost:8000/users';

export async function addUser(user) {
    return await axios.post(url + '/signup', user);
}

export async function loginUser(user) {
    return await axios.post(url + '/login', user);
}