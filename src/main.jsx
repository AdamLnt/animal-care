import { createRoot } from 'react-dom/client'
// import './index.css'
import Home from './pages/home.jsx'
import Login from './pages/login.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
   </Routes>
  </BrowserRouter>
)
