import React from 'react'
import './chat.css'
const RightScreenChatProfile = () => {
    return (
        <div class="row heading">
            <div class="col-sm-2 col-md-1 col-xs-3 heading-avatar">
                <div class="heading-avatar-icon">
                    <img src="https://assets.codepen.io/585692/internal/avatars/users/default.png?fit=crop&format=auto&height=512&version=1552803131&width=512" />
                </div>
            </div>
            <div class="col-sm-8 col-xs-7 heading-name">
                <a class="heading-name-meta">Ankit Jain</a>
                <span class="heading-online">Online</span>
            </div>
            <div class="col-sm-1 col-xs-1  heading-dot pull-right">
                <i
                    class="fa fa-ellipsis-v fa-2x  pull-right"
                    aria-hidden="true"
                ></i>
            </div>
        </div>
    )
}

export default RightScreenChatProfile