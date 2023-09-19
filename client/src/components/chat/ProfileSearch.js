import React, { useState } from 'react'
import './ProfileSearch.css'
import { searchInitialApiCallHandler } from '../../reduxStore/slices/searchSlice'
import { useDispatch, useSelector } from 'react-redux'
import { addUserToGroupApiCallHandler } from '../../reduxStore/slices/groupSlice'


const ProfileSearch = () => {
    const dispatch = useDispatch()
    const {searchResults} = useSelector(state=>state.search)
    const [searchText,setSearchText] = useState({
        searchTest:''
    })

    const searchTextChangeHandler = (e)=>{
        setSearchText({
            searchTest:e.target.value
        })
    }
    const searchSubmitHandler = (e)=>{
        e.preventDefault()
       const text = searchText.searchTest
        dispatch(searchInitialApiCallHandler(text))
    }

    const profileClickHandler=(userId)=>{
        dispatch(addUserToGroupApiCallHandler(userId))
    }
    return (
        <div className='parent'>
            <div class="wrap">
                  <form onSubmit={searchSubmitHandler}>
                <div class="search">
                  <input type="text" onChange={searchTextChangeHandler} class="searchTerm" placeholder="What are you looking for?" />
                    <button type="submit" class="searchButton">
                        <i class="fa fa-search"></i>
                    </button>
                </div>
                  </form>
            </div>
            <ul className='ul'>
               {searchResults.map((profile)=>{
               return <li onClick={()=> profileClickHandler(profile.id)}>Name:{profile.name} Email:{profile.email}</li>

               })}
            </ul>


        </div>
    )
}

export default ProfileSearch