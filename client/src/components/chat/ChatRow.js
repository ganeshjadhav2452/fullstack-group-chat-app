import React from 'react'
import './chat.css'
const ChatRow = () => {
  return (
    <div class="row sideBar-body ">
<div class="col-sm-3 col-xs-3 sideBar-avatar">
  <div class="avatar-icon">
    <img src="https://assets.codepen.io/585692/internal/avatars/users/default.png?fit=crop&format=auto&height=512&version=1552803131&width=512"/>
  </div>
</div>
<div class="col-sm-9 col-xs-9 sideBar-main">
  <div class="row">
    <div class="col-sm-8 col-xs-8 sideBar-name">
      <span class="name-meta">Ankit Jain
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
}

export default ChatRow