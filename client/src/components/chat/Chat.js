import React, { useState ,useEffect} from "react";
import "./chat.css";
import ChatRow from "./ChatRow";
import RightScreenChatBody from "./RightScreenChatBody";
import RightScreenChatProfile from "./RightScreenChatProfile";
import { fetchMessagesApiCallHandler, sendMessageApiCallHandler } from "../../reduxStore/slices/messageSlice";
import {useDispatch,useSelector} from 'react-redux';

const Chat = () => {
  const [message,setMessage] = useState('')
  const dispatch = useDispatch()
  const {messages,updated} = useSelector((state)=> state.message)

  console.log(messages)
  const messageChangeHandler =(e)=>{
    setMessage(e.target.value)
  }

  const sendClickHandler =async()=>{
   console.log(message)
    try {
    await  dispatch(sendMessageApiCallHandler(message))

    } catch (error) {
      console.log(error)
      
    }
  }
  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(fetchMessagesApiCallHandler());
    }, 5000);
  
    return () => {
      clearInterval(intervalId); 
    };
  }, []);

  return (
    <div className=" ">
      <div class="container  app">
      <div class="row app-one">
        <div class="col-sm-4 side">
          <div class="side-one">
            <div class="row heading">
              <div class="col-sm-3 col-xs-3 heading-avatar">
                <div class="heading-avatar-icon">
                  <img src="https://assets.codepen.io/585692/internal/avatars/users/default.png?fit=crop&format=auto&height=512&version=1552803131&width=512" />
                </div>
              </div>
              <div class="col-sm-1 col-xs-1  heading-dot  pull-right">
                <i
                  class="fa fa-ellipsis-v fa-2x  pull-right"
                  aria-hidden="true"
                ></i>
              </div>
              <div class="col-sm-2 col-xs-2 heading-compose  pull-right">
                <i
                  class="fa fa-comments fa-2x  pull-right"
                  aria-hidden="true"
                ></i>
              </div>
            </div>

            <div class="row searchBox">
              <div class="col-sm-12 searchBox-inner">
                <div class="form-group has-feedback">
                  <input
                    id="searchText"
                    type="text"
                    class="form-control"
                    name="searchText"
                    placeholder="Search"
                  />
                  <span class="glyphicon glyphicon-search form-control-feedback"></span>
                </div>
              </div>
            </div>

            <div class="row sideBar">
              <ChatRow />
            </div>
          </div>
        </div>

    {/* Right side screen starts */}

        <div class="col-sm-8 conversation">
        
          <RightScreenChatProfile/>

          <RightScreenChatBody messages={messages} />

          <div class="row reply">
            <div class="col-sm-1 col-xs-1 reply-emojis">
              <i class="fa fa-smile-o fa-2x"> </i>
            </div>
            <div class="col-sm-9 col-xs-9 reply-main">
              <textarea onChange={messageChangeHandler} class="form-control" rows="1" id="comment" placeholder="say something..."></textarea>
            </div>
            <div class="col-sm-1 col-xs-1 reply-recording">
              <i class="fa fa-microphone fa-2x" aria-hidden="true"></i>
            </div>
            <div onClick={sendClickHandler} class="col-sm-1 col-xs-1 reply-send">
              <i class="fa fa-send fa-2x" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Chat;
