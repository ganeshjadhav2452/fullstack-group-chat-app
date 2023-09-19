import React from 'react'
import './chat.css'

const RecivedMessage = ({message}) => {
    return (

        <div class="row message-body " >
            <div class="col-sm-12 message-main-receiver div-chat">
                <div class="receiver">
                    <span class="message-time pull-right span-chat">{message.name}</span>
                    <div class="message-text ">{message.message}</div>
                </div>
            </div>
        </div>
    )
}

export default RecivedMessage