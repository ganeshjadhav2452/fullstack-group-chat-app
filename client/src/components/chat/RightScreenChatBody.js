import React, { useEffect, useRef } from 'react';
import RecivedMessage from './RecivedMessage';
import SentMessage from './SentMessage';

const userId = localStorage.getItem('userId');

const RightScreenChatBody = ({ messages }) => {
  const chatContainerRef = useRef(null);

  // Scroll to the bottom of the chat container when messages change
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

    return (
        <div class="row message" id="conversation"  ref={chatContainerRef}>
            <div class="row message-previous">
                <div class="col-sm-12 previous">
                    <a onclick="previous(this)" id="ankitjain28" name="20">
                        Show Previous Message!
                    </a>
                </div>
            </div>

           
           

           {messages.map((messageObj)=>{
           if(messageObj.userId == userId){
         
            return  <SentMessage message={messageObj}/>
           }else{
        
            return  <RecivedMessage message={messageObj}/>
           }
           })} 
           
        </div>
    )
}

export default RightScreenChatBody