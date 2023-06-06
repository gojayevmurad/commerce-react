import { axiosClient } from './';

const getUserData = () => {
    return axiosClient.get('/profile');
}

export { getUserData };