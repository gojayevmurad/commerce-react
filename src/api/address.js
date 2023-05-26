import { axiosClient } from './';

const getAddressList = () => {
    return axiosClient.get('/address')
}

const addAddress = (data) => {
    return axiosClient.post('/address', data)
}

const deleteAddress = (id, type) => {
    return axiosClient.delete(`address/${id}/${type}`)
}

const editAddress = (id, data) => {
    return axiosClient.put(`/address${id}`, data)
}

export { getAddressList, addAddress, deleteAddress, editAddress }