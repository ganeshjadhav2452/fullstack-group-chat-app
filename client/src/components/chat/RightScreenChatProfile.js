import React, { useState } from 'react'
import './chat.css'
import ProfileSearch from './ProfileSearch'
const RightScreenChatProfile = ({currentGroup}) => {
    const [showSearch,setShowSearch] = useState(false)
    if(currentGroup.id) localStorage.setItem("groupId",currentGroup.id)

    const addUserClickHandler =()=>{
        setShowSearch(!showSearch)
    }
    return (
        <div class="row heading">
            <div class="col-sm-2 col-md-1 col-xs-3 heading-avatar">
                <div class="heading-avatar-icon">
                    <img src="https://assets.codepen.io/585692/internal/avatars/users/default.png?fit=crop&format=auto&height=512&version=1552803131&width=512" />
                </div>
            </div>
            <div class="col-sm-8 col-xs-7 heading-name">
                <a class="heading-name-meta">{currentGroup.groupName}</a>
                <span class="heading-online">Online</span>
            </div>
            <div onClick={addUserClickHandler} class="col-sm-1 col-xs-1  heading-dot pull-right">
                <i
                    class="s fa-2x  pull-right"
                    aria-hidden="true"
                > <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg></i>
            </div>
            {showSearch && <ProfileSearch/>}
        </div>
    )
}

export default RightScreenChatProfile