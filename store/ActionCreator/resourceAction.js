import axios from "axios";
import {  FETCH_RESOURCE_REQUEST,FETCH_RESOURCE_SUCCESS,FETCH_RESOURCE_FAILURE ,FETCH_RESOURCE_DATA } from "../Reducers/resourceReducer"

export const resourcesAction = () => async (dispatch) => {
    try {
        dispatch({ type: FETCH_RESOURCE_REQUEST });
        const { data } = await axios.get('https://engineering-task.elancoapps.com/api/resources')
        dispatch({ type : FETCH_RESOURCE_SUCCESS, payload:data })

    } catch (error) {
        dispatch({
            type: FETCH_RESOURCE_FAILURE,
            payload: error.data && error.response.data.messege ? error.response.data.messege : error.messege,
        });


    }
}


const userData = [];