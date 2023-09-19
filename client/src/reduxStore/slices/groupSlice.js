import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const token = localStorage.getItem('token')

const groupSlice = createSlice({
    name: 'group',
    initialState: {
        groups: [],
        newGroupChanges: false,
        currentGroup: {}
    },
    reducers: {
        setGroups(state, action) {
            state.groups = action.payload;

        },
        setCurrentGroup(state, action) {
            state.currentGroup = action.payload
        },
        setGroupChanges(state, action) {
            state.newGroupChanges = !state.newGroupChanges
        }
    }
})

export const { setGroups, setCurrentGroup, setGroupChanges } = groupSlice.actions;
export default groupSlice.reducer;


export const createGroupApiCall = (name) => {

    return async (dispatch, getState) => {
        
        try {
            const response = await axios.post('http://localhost:5000/create-group', { groupName: name }, {
                headers: {
                    "Authorization": token,
                    "Content-Type": "application/json"
                }
            })
            dispatch(setGroupChanges())
        } catch (error) {
            console.log(error)

        }
    }
}


export const fetchGroupsApiCall = () => {

    return async (dispatch, getState) => {
       
        try {
            const response = await axios.get('http://localhost:5000/fetch-groups', {
                headers: {
                    "Authorization": token,
                    "Content-Type": "application/json"
                }
            })
            console.log(response)
            dispatch(setGroups(response.data.data))
        } catch (error) {
            console.log(error)

        }
    }
}


export const addUserToGroupApiCallHandler = (userId) => {

    return async (dispatch, getState) => {
        const groupId = await localStorage.getItem('groupId')
        try {
            const response = await axios.post('http://localhost:5000/add-user-to-group', { userId: userId, groupId: groupId }, {
                headers: {
                    "Authorization": token,
                    "Content-Type": "application/json"
                }
            })
        } catch (error) {
            console.log(error)

        }
    }
}