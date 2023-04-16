import axios from "axios";
// import { LocalStoragesService } from "../redux/services/localStorage";

export const BASE_URL = "";
// export const IMG_URL = ""

axios.defaults.baseURL = BASE_URL ;

// if has a token :
// axios.interceptors.request.use(
//     config => {
//         const token  = LocalStoragesService.getItem("tokenAdmin");
//         const auth = token ? `Bearer ${token}` : "";
//         config.headers.Authorization = auth;
//         return config;
//     }
// )

export default axios;
