import { FETCH_APP_DATA_REQUEST,FETCH_APP_DATA, FETCH_USER_DATA_FAILURE, FETCH_USER_DATA_REQUEST, FETCH_USER_DATA_SUCCESS } from "../constants/userconstant";

const intialState = {
    loading:true,
    applications:[],
    appDetails: []
};

export const reducerApplication = (state=intialState,action)=>{
    switch(action.type){
        case FETCH_USER_DATA_REQUEST:
            return{...state,loading:true,applications:[] };
           
        case FETCH_USER_DATA_SUCCESS:
            return{...state,loading:false,applications:action.payload};
            
        case FETCH_USER_DATA_FAILURE:
            return {...state,loading:false,error:action.payload}; 
        case FETCH_APP_DATA:
            return {...state,loading:false, appDetails: action.payload}; 
        case FETCH_APP_DATA_REQUEST:
            return {...state,loading:true, appDetails: []};   
        default:
            return state;    
              
    }

};

