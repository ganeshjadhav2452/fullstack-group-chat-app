import React,{useRef, useState} from 'react'
import './createGroupForm.css'
import {createGroupApiCall} from '../../reduxStore/slices/groupsSlice'
import {useDispatch} from 'react-redux'


const CreateGroupForm = () => {
    const groupNameRef = useRef()
  const dispatch = useDispatch()
    const createGroupSubmitHandler =async (e)=>{
        e.preventDefault()
      console.log('triggered')
        try {
            await dispatch(createGroupApiCall(groupNameRef.current.value))

          
        } catch (error) {
            console.log(error)
            
        }
    }
    return (
        <div class="login-page">
        <div class="form">
          <form onSubmit={createGroupSubmitHandler} class="register-form">
            <input type="text" placeholder="group name" ref={groupNameRef}/>
          
            <button type='submit'>create</button>
            {/* <p class="message">Already registered? <a href="#">Sign In</a></p> */}
          </form>
        
        </div>
      </div>
    )
}

export default CreateGroupForm