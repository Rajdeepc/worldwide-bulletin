import axios from 'axios'
import {showErrorToast} from '../utils/helpers';
import { BASE_ENDPOINT } from "../utils/constants";


export default class HttpService {

    
    static apiGet = async (url, parameters) => {
        return axios.get(BASE_ENDPOINT + url, {params: parameters})
        .catch(error => {
            showErrorToast(error.response.status)
        })
        .then((response) => {
            return response.data
        })
    }
}
