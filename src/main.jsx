import { createRoot } from 'react-dom/client'
import CreateProject from './pages/project.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/create" element={<CreateProject />} />
    </Routes>
  </BrowserRouter>
)
