import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import { Register } from './pages/Register'
import { Login } from './pages/Login'
import Dashboard from './pages/Dashboard'


export default function App(){
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login />} /> 
      <Route path="/register" element={<Register />} /> 
      <Route path="/dashboard/:user" element={<Dashboard />} /> 


         </Routes>

    
    </BrowserRouter>
    
  )
}