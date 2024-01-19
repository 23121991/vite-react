import './App.css'
import SignUp from './pages/SignUp';
import { Route, Routes } from 'react-router-dom';
import LogIn from './pages/Login';
import Home from './pages/Home';

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<SignUp/>}/>
      <Route path="/login" element={<LogIn/>}/>
      <Route path="/home" element={<Home/>}/>
    </Routes>
    </>
  )
}

export default App
