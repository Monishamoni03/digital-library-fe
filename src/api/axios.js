import axios from "axios";

const axiosInstance = axios.create({ baseURL: process.env.REACT_WEBPACK_APP_BASEURL })

axiosInstance.interceptors.request.use(
    (request) => {
        const token = localStorage.getItem("token")
        if (token.getItem("token")) {
            request.headers["Authorization"] = token
        }
        else {
           return request
        }
    },
    (error) => {
        return error
    }
)

export default axiosInstance;