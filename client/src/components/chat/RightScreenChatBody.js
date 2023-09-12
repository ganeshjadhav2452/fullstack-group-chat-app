import React from 'react'
import RecivedMessage from './RecivedMessage'
import SentMessage from './SentMessage'
const userId = localStorage.getItem('userId')
const RightScreenChatBody = ({messages}) => {
    return (
        <div class="row message" id="conversation">
            <div class="row message-previous">
                <div class="col-sm-12 previous">
                    <a onclick="previous(this)" id="ankitjain28" name="20">
                        Show Previous Message!
                    </a>
                </div>
            </div>

           
           

           {messages.map((messageObj)=>{
           if(messageObj.userId == userId){
            console.log('entered in receive')
            return  <SentMessage message={messageObj}/>
           }else{
            console.log('entered in sent')
            return  <RecivedMessage message={messageObj}/>
           }
           })} 
           
        </div>
    )
}

export default RightScreenChatBody