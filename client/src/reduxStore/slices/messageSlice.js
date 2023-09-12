import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const token = localStorage.getItem('token')
const messageSlice = createSlice({
    name:'message',
    initialState:{

    },
    reducers:{

    }
})

export default messageSlice.reducer;


export const sendMessageApiCallHandler =(message)=>{
    console.log(message)
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