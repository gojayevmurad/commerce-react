import { axiosClientFree, axiosClient } from "./index";

const register = (data) => {
    return axiosClientFree.post("/auth/user/register", data);
};

const login = (data) => {
    return axiosClientFree.post("/auth/user/login", data);
};

const changePassword = (data) => {
    return axiosClient.put("/security/v1/user/client/password/update", data);
};

export { register, login, changePassword };
