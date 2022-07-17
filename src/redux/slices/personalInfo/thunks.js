import axios from "axios"
import { getPersonalData, getPersonalDataError } from "./personalInfoSlice"
const url = "http://localhost:3020"
export const getPersonalInfo = () => (dispatch) => {
    axios.get(`${url}/personal&info`)
        .then(res => {
            dispatch(getPersonalData(res.data.data))
        })
        .catch(err => dispatch(getPersonalDataError(err)))
}