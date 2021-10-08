import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://reactburger-71e97-default-rtdb.firebaseio.com/'
});

export default instance;