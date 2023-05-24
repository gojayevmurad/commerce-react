import { axiosClient } from './';

const getAddressList = () => {
    return axiosClient.get('/address')
}

const addAddress = (data) => {
    return axiosClient.post('/address', data)
}

const deleteAddress = (id) => {
    return axiosClient.delete(`address${id}`, id)
}

const editAddress = (id, data) => {
    return axiosClient.put(`/address${id}`, data)
}

export { getAddressList, addAddress, deleteAddress, editAddress }