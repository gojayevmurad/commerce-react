import axios from "axios";


const BASE_URL = "http://localhost:5000/";

const axiosClient = axios.create({
    baseURL: BASE_URL,
});

const axiosClientFree = axios.create({
    baseURL: BASE_URL,
});

const refreshTokenInstance = axios.create({
    baseURL: BASE_URL,
});

axiosClient.interceptors.request.use(
    async (config) => {
        config.headers = {
            Authorization: JSON.parse(localStorage.getItem("user"))?.accessToken,
        };
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

axiosClient.interceptors.response.use(
    (response) => {
        return response.data;
    },
    async function (error) {
        if (error.response.status === 401) {
            try {
                const { data } = await refreshTokenInstance.post(
                    "/auth/user/refresh-token",
                    null,
                    {
                        headers: {
                            Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))?.refreshToken}`,
                        },
                    }
                );
                const newStorage = {
                    ...JSON.parse(localStorage.getItem("user")),
                    accessToken: data.data.accessToken,
                };
                localStorage.setItem('user', JSON.stringify(newStorage))
                let newConfig = error.config;
                newConfig.headers['Authorization'] = data.data.accessToken;
                await axiosClient(newConfig);
            } catch (error) {
                localStorage.removeItem("user");
                window.location.replace("/login");
            }
            return;
        }
        return Promise.reject(error.response.data);
    }
);

axiosClientFree.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

axiosClientFree.interceptors.response.use(
    function (response) {
        return response.data;
    },
    function (error) {
        return Promise.reject(error.response.data);
    }
);

export { axiosClient, axiosClientFree };
