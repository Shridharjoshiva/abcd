import axios from "axios";
import { FETCH_USER_DATA_FAILURE, FETCH_USER_DATA_REQUEST, FETCH_USER_DATA_SUCCESS, FETCH_APP_DATA } from "../constants/userconstant"

export const userAction = () => async (dispatch) => {
    try {
        dispatch({ type: FETCH_USER_DATA_REQUEST });
        const { data } = await axios.get('https://engineering-task.elancoapps.com/api/applications')
        dispatch({ type : FETCH_USER_DATA_SUCCESS, payload:data })

    } catch (error) {
        dispatch({
            type: FETCH_USER_DATA_FAILURE,
            payload: error.data && error.response.data.messege ? error.response.data.messege : error.messege,
        });


    }
}

export const fetchAppData = (appName) => async (dispatch) => {
    try {
        dispatch({ type: "FETCH_APP_DATA_REQUEST" });
        const { data } = await axios.get('https://engineering-task.elancoapps.com/api/applications' + '/' + appName)
        dispatch({ type : FETCH_APP_DATA, payload:data })

    } catch (error) {
        dispatch({
            type: "FETCH_APP_DATA_FAILURE",
            payload: error.data && error.response.data.messege ? error.response.data.messege : error.messege,
        });


    }
}

const userData = [];