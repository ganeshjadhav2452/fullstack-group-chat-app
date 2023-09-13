import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const token = localStorage.getItem('token')
let lastId = 0;
const messageSlice = createSlice({
    name:'message',
    initialState:{
        updated:true,
        messages:[]
    },
    reducers:{
        updateCommonState(state,action){
           
            state.messages = [...state.messages,...action.payload]
            console.log('this is previous array',[...state.messages])
            console.log('this is latest array',[...action.payload])
        },
        setUpdated(state,action){
            state.updated = !state.updated
        }
    }
})

export const {updateCommonState,setUpdated} = messageSlice.actions;
export default messageSlice.reducer;


export const sendMessageApiCallHandler =(message)=>{
    
    return async(dispatch,getState)=>{

        try {
            const response = await axios.post('http://localhost:5000/send-message', {
                message: message
              }, {
                headers: {
                  "Authorization": token,
                  "Content-Type": "application/json"
                }
              });
          
            console.log(response)
        } catch (error) {
            console.log(error)
            
        }
    }
}

export const fetchMessagesApiCallHandler=()=>{

    return async(dispatch,getState)=>{
    
        try {
            const response = await axios.get(`http://localhost:5000/receive-messages/${lastId}`,{
               
                headers: {
                  "Authorization": token,
                  "Content-Type": "application/json"
                }
              })
            
           
         
            if(response.data.length > 0){
             
                dispatch(updateCommonState(response.data))
                lastId =response.data[response.data.length -1]?.id
            }
        
           
        } catch (error) {
            console.log(error)
            
        }
    }
}