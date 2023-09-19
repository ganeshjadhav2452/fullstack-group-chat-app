import React from 'react'
import './chat.css'
import { useSelector,useDispatch } from 'react-redux'
import {setCurrentGroup} from '../../reduxStore/slices/groupSlice'
import { updateCommonState } from '../../reduxStore/slices/messageSlice'
const ChatRow = () => {
  const dispatch = useDispatch()
  const {groups} = useSelector(state => state.groups)

  const groupClickHandler=(groupData)=>{

  try {
   
    dispatch(setCurrentGroup(groupData))
    dispatch(updateCommonState({messages:[],vanish:true}))
    
  } catch (error) {
    console.log(error)
  }
  }
  return (
   <>
   {
    groups.map((group)=>{
      return(
        <div class="row sideBar-body " onClick={()=>groupClickHandler(group)}>
        <div class="col-sm-3 col-xs-3 sideBar-avatar">
          <div class="avatar-icon">
            <img src="https://assets.codepen.io/585692/internal/avatars/users/default.png?fit=crop&format=auto&height=512&version=1552803131&width=512"/>
          </div>
        </div>
        <div class="col-sm-9 col-xs-9 sideBar-main">
          <div class="row">
            <div class="col-sm-8 col-xs-8 sideBar-name">
              <span class="name-meta">{group.groupName}
            </span>
            </div>
            <div class="col-sm-4 col-xs-4 pull-right sideBar-time">
              <span class="time-meta pull-right">18:18
            </span>
            </div>
          </div>
        </div>
        </div>
      )
    })
   }
   </>
  )
}

export default ChatRow