import React from 'react'
import { useDispatch } from 'react-redux'
import { removeUserFromGroupClickHandler } from '../../../reduxStore/slices/groupsSlice'
import './button.css'
const DeleteButton = ({userId}) => {
  const dispatch = useDispatch()


  const removeUserClickHandler = ()=>{
    // making api call for removing user From group 
   dispatch(removeUserFromGroupClickHandler(localStorage.getItem("groupId"),userId,localStorage.getItem('userId')))
  }
  return (
    <button onClick={removeUserClickHandler} className='button'>Remove</button>
  )
}

export default DeleteButton