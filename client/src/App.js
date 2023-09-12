import React from 'react'
import Auth from './components/auth/Auth'
import Chat from './components/chat/Chat'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Auth/>}/>
        <Route path='/chats' element={<Chat />}/>
      </Routes>
     
    </BrowserRouter>
  )
}

export default App