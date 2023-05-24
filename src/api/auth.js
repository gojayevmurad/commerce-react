import { axiosClientFree, axiosClient } from "./index";

const register = (data) => {
    return axiosClientFree.post("/auth/user/register", data);
};

const login = (data) => {
    return axiosClientFree.post("/auth/user/login", data);
};

const changePassword = (data) => {
    return axiosClient.put("/auth/user/change-password", data);
};

export { register, login, changePassword };
