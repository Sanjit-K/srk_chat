
import './App.css'
import SignIn from './pages/signin/SignIn.jsx'
import SignUp from './pages/signup/SignUp.jsx'
import Home from './pages/home/Home.jsx'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext.jsx'
import { Navigate } from 'react-router-dom'

function App() {
  const {authUser} = useAuthContext()
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={authUser ? <Navigate to="/home"/> : <SignIn />} />
        <Route path="/signup" element={authUser ? <Navigate to="/home"/> : <SignUp />} />
        <Route path="/home" element={authUser ? <Home/> : <Navigate to="/"/>} />
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App
