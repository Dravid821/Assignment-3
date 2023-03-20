import axios from "axios"
import { FETCH_DATA_SUCCESS, FETCH_DATA_COME, FETCH_DATA_ERROR,FETCH_DATA_DELETE, FETCH_DATA_EDIT } from "../Constant";
let url = "https://jsonplaceholder.typicode.com/users"

export const fetchcome = () => {
    return {
        type: FETCH_DATA_COME,

    }
}
export const fetchsuccess = (user) => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: user

    }
}
export const  fetcherror = (err) => {
    return {
        type: FETCH_DATA_ERROR,
        payload: err
    }
}
export const  fetchdelete = (id) => {
    return {
        type: FETCH_DATA_DELETE,
        payload: id,
    }
}
export const  fetchedit = (data) => {
    return {
        type: FETCH_DATA_EDIT,
        payload: data,
    }
}

export const carddata = () => {
    return (dispatch)=>{
    dispatch(fetchcome())
    axios.get(url)
        .then((res) => {
            const data = res.data
            dispatch(fetchsuccess(data))
            console.log(res.data)
        }
        )
        .catch((err) => {
            const message = err.message
            dispatch(fetcherror(message))
            console.log(err.message)
        })
    }
}
export default carddata