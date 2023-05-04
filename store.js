import{createStore,combineReducers,applyMiddleware}from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
// import { reducerApplication} from './store/Reducers/reducerApplication';
import { reducerApplication } from './store/Reducers/reducerApplication';

const rootReducer = combineReducers({
    application:reducerApplication,

});

const intialState = {}
const middleware = [thunk]

const store = createStore(
    rootReducer,
    intialState,
    composeWithDevTools(applyMiddleware(...middleware )))

export default store;