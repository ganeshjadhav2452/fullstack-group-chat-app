import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const token = localStorage.getItem('token')
const searchSlice = createSlice({
    name:'search',
    initialState:{
        searchResults:[]

    },
    reducers:{
       updateSearchResults(state,action){
        state.searchResults = action.payload
       } 
    }
})

export const {updateSearchResults} = searchSlice.actions; 
export default searchSlice.reducer;


export const searchInitialApiCallHandler = (searchedText)=>{

    return async(dispatch,getState)=>{

        try {
                const response = await axios.get('http://localhost:5000/search-profiles',{params:{
                    searchedText:searchedText
                },
                headers: {
                    "Authorization": token,
                    "Content-Type": "application/json"
                  }})

                  dispatch(updateSearchResults(response.data.data))
        } catch (error) {
            console.log(error)
            
        }
    }
}

