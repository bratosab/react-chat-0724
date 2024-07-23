import './App.css'
import { Chatroom } from './components/Chatroom'
import { Login } from './components/Login'
import { auth } from './firebaseInstance'
import { useAuthState } from 'react-firebase-hooks/auth'

function App() {
  const [user] = useAuthState(auth)

  return (
    <>
      <header>
        <h1>React Chat</h1>
      </header>
      <section>
        { user ? <Chatroom /> : <Login /> }
      </section>
    </>
  )
}

export default App
