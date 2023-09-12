import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const authSlice = createSlice({
    name:'auth',
    initialState:{
        error:null
    },
    reducers:{
        setError(state,action){
            state.error = action.payload
        }
    }
})

export const {setError} = authSlice.actions; 
export default authSlice.reducer;

export const authApiCallHandler = (userDetails,loginOrSignup)=>{
    console.log(userDetails,loginOrSignup)

    return async(dispatch, getState)=>{
        try {
           const response = await axios.post(`http://localhost:5000/${loginOrSignup}`,{userDetails})

           await localStorage.setItem("token",response.data.token)
        } catch (error) {
            
            dispatch(setError(error.response.data.message))
        }
    }
}
