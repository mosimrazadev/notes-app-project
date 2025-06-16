import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Notes from './apps/notes/Notes'
import Navbar from './components/Navbar'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'
import AuthProvider from './context/auth-context'

function App() {
  return (
    <>
    <BrowserRouter>
      <AuthProvider>
      <Navbar/>
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/notes' element={<Notes/>}/>

          <Route path='/login' element={<LogIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>
       </Routes>
      </AuthProvider>
    </BrowserRouter>
    </>
  )
}

export default App
