import React from 'react'
import './chat.css'
const SentMessage = ({message}) => {
    return (
        <div class="row message-body">
            <div class="col-sm-12 message-main-sender">
                <div class="sender">
                    <span class="message-time pull-right">You</span>
                    <div class="message-text">
                        {message.message}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SentMessage