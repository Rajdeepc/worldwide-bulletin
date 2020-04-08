import axios from 'axios'
import {showErrorToast} from '../utils/helpers';


export default class HttpService {
    static apiGet = async (url) => {
        return axios.get(url)
        .catch(error => {
            showErrorToast(error.response.status)
        })
        .then((response) => {
            return response.data
        })
    }
}
