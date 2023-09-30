import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const token = localStorage.getItem('token')

const groupsSlice = createSlice({
    name: 'group',
    initialState: {
        groups: [],
        newGroupChanges: false,
        currentGroup: {},
        groupUsers: [],
        groupAdmins: []
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
        },
        setGroupUsers(state, action) {
            state.groupUsers = action.payload.users;
            state.groupAdmins = action.payload.adminUsers
        }
    }
})

export const { setGroups, setCurrentGroup, setGroupChanges, setGroupUsers } = groupsSlice.actions;
export default groupsSlice.reducer;


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

export const fetchUsersOfGroupApiCallHandler = (groupId) => {

    return async (dispatch, getState) => {
        const groupId = await localStorage.getItem('groupId')
        try {
            const response = await axios.get('http://localhost:5000/fetch-users-of-group', {
                params: { groupId: groupId },
                headers: {
                    "Authorization": token,
                    "Content-Type": "application/json"
                }
            })

            let users = [];
            let adminUsers = [];

            for (let i = 0; i < response.data.data.length; i++) {
                if (response.data.data[i]['group-user-info'].isAdmin) {
                    adminUsers.push(response.data.data[i].id)
                } else {
                    users.push(response.data.data[i])
                }
            }

            dispatch(setGroupUsers({ users: response.data.data, adminUsers: adminUsers }))

        } catch (error) {
            console.log(error)

        }
    }
}

export const makeAdminApiCallHandler = (groupId, userId, adminUserId) => {

    return async (dispatch, getState) => {

        try {
            const response = await axios.post('http://localhost:5000/make-user-admin',{} ,{
                params:{
                    groupId: groupId,
                    userId: userId,
                    adminUserId: adminUserId
                   },
                headers: {
                    "Authorization": token,
                    "Content-Type": "application/json"
                },
            });
            dispatch( fetchUsersOfGroupApiCallHandler())
        } catch (error) {
            console.log(error)

        }
    }
}

export const removeUserFromGroupClickHandler = (groupId, userId, adminUserId) => {

    return async (dispatch, getState) => {
        console.log('token from frontend >>>',token)
        try {
            const removeUserResponse = await axios.delete('http://localhost:5000/remove-user-from-group', {
                params:{ groupId: groupId, userId: userId, adminUserId: adminUserId },
                headers: {
                    "Authorization": token,
                    "Content-Type": "application/json"
                }
            })
           dispatch( fetchUsersOfGroupApiCallHandler())
       
        } catch (error) {
            console.log(error)
        }
    }
}