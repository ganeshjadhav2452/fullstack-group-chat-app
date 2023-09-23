import React, { useState } from 'react'
import './chat.css'
import ProfileSearch from './ProfileSearch'
import GroupUser from './GroupUser'
const RightScreenChatProfile = ({currentGroup}) => {
    const [showSearch,setShowSearch] = useState(false)
    const [showGroupUsers,setShowGroupUsers] = useState(false)
    if(currentGroup.id) localStorage.setItem("groupId",currentGroup.id)

    const addUserClickHandler =()=>{
        setShowSearch(!showSearch)
    }
    const showGroupUserClickHandler =()=>{
        setShowGroupUsers(!showGroupUsers)
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
            <div  class="col-sm-1 col-xs-1  heading-dot pull-right">
                 {/* add user In the group Icon  */}
                <i onClick={addUserClickHandler}
                    class="icon fa-2x  pull-right"
                    aria-hidden="true"
                > <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg></i>

                {/* users In the group Icon  */}
                <i
                onClick={showGroupUserClickHandler}
                    class="s fa-2x  pull-right"
                    aria-hidden="true"
                > <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"/></svg></i>
            </div>
            {showSearch && <ProfileSearch/>}
            {showGroupUsers && <GroupUser/>}
        </div>
    )
}

export default RightScreenChatProfile