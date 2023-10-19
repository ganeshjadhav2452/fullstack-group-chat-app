import { createSlice } from "@reduxjs/toolkit";

const transcriptSlice = createSlice({
    name:'transcript',
    initialState:{
        transcript:null,
    },
    reducers:{
        setTranscript(state,action){
            state.transcript = action.payload
            console.log('slice updating')
        }
    }
})

export const {setTranscript} = transcriptSlice.actions;
export default transcriptSlice.reducer;