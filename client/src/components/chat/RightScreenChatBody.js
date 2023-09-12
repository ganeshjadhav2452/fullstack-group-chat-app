import React from 'react'
import RecivedMessage from './RecivedMessage'
import SentMessage from './SentMessage'

const RightScreenChatBody = () => {
    return (
        <div class="row message" id="conversation">
            <div class="row message-previous">
                <div class="col-sm-12 previous">
                    <a onclick="previous(this)" id="ankitjain28" name="20">
                        Show Previous Message!
                    </a>
                </div>
            </div>

            <RecivedMessage/>
            <SentMessage/>
           
        </div>
    )
}

export default RightScreenChatBody