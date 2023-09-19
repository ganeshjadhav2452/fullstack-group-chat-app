import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const token = localStorage.getItem('token')

const messageSlice = createSlice({
    name: 'message',
    initialState: {
        updated: true,
        messages: [],
        lastId :0
    },
    reducers: {
        updateCommonState(state, action) {

          if(action.payload.vanish){
            state.messages = [];
            state.lastId = 0;
          }else{
            state.messages = [...state.messages, ...action.payload.messages]
            state.lastId = action.payload.lastId
          }
          
        },
        setUpdated(state, action) {
            state.updated = !state.updated
        }
    }
})

export const { updateCommonState, setUpdated } = messageSlice.actions;
export default messageSlice.reducer;


export const sendMessageApiCallHandler = (message, groupId) => {

    return async (dispatch, getState) => {

        try {
            const response = await axios.post('http://localhost:5000/send-message', {
                message: message,
                groupId: groupId
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

export const fetchMessagesApiCallHandler = ( groupId ) => {

    return async (dispatch, getState) => {
            const state = getState();
            const lastIdFromState = state.message.lastId;
        try {
            const response = await axios.get(`http://localhost:5000/receive-messages/${lastIdFromState}`, {
                params: {
                  groupId: groupId,
                },
                headers: {
                  Authorization: token,
                  "Content-Type": "application/json",
                },
              });
              



            if (response.data.length > 0) {

                dispatch(updateCommonState({messages:response.data,vanish:false,lastId :response.data[response.data.length - 1]?.id}))
                
            }


        } catch (error) {
            console.log(error)

        }
    }
}