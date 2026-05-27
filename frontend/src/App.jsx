import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Inbox from './Components/Inbox'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/*"
          element={
            <div className='bg-[#FFFFFF] h-screen'>
              <Navbar/>
              <div className='flex'>
                <Sidebar/>
                <Routes>
                  <Route path="/inbox/*" element={<Inbox />} />
                  <Route path="/" element={<Navigate to="/inbox/primary" replace />} />
                </Routes>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
