import React from 'react'
import { makeAdminApiCallHandler } from '../../../reduxStore/slices/groupsSlice'
import { useDispatch } from 'react-redux'
import './button.css'
const PromotAdminButton = ({userId}) => {
  const dispatch = useDispatch()

  const makeAdminClickHandler = ()=>{
    dispatch(makeAdminApiCallHandler(localStorage.getItem("groupId"),userId,localStorage.getItem('userId')))
  }
  return (
    <button className='button' onClick={makeAdminClickHandler}>Make Admin</button>
  )
}

export default PromotAdminButton