import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading:false,
  resources: [],
  resDetails:[],
}

export const reducerApplication = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    FETCH_RESOURCE_REQUEST: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.loading=true
    },
    FETCH_RESOURCE_SUCCESS: (state,action) => {
      state.resources=action.payload
      state.loading=false
    },
    FETCH_RESOURCE_FAILURE: (state, action) => {
        state.resources=action.payload
        state.loading=false
    },
    FETCH_RESOURCE_DATA: (state, action) => {
        state.resources=action.payload
        state.loading=false
    },
  },
})

// Action creators are generated for each case reducer function
export const { FETCH_RESOURCE_REQUEST,FETCH_RESOURCE_SUCCESS,FETCH_RESOURCE_FAILURE ,FETCH_RESOURCE_DATA} = reducerApplication.actions

export default reducerApplication.reducer