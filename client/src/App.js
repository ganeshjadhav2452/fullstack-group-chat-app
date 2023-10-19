import React, { lazy,Suspense } from 'react'
import Auth from './components/auth/Auth'

import {BrowserRouter,Routes, Route} from 'react-router-dom'
//lazy loadded components
const Chat = lazy(()=>import('./components/chat/Chat'))
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Auth/>}/>
        <Route path='/chats' element={ <Suspense fallback={<div>Loading...</div>}>
        <Chat/>
      </Suspense>}/>
      </Routes>
     
    </BrowserRouter>
  )
}

export default App