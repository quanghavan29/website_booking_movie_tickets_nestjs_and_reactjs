import axios from "axios"
import { ACCESS_TOKEN, APIMethod, SERVER_API_URL } from "../../utils/config/contants"

export class BaseService {
    get = (url) => {
        return axios({
            url: `${SERVER_API_URL}/${url}`,
            method: APIMethod.GET,
            headers: {'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)},
        })
    }
}