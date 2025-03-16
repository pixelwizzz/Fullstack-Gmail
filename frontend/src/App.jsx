import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Inbox from './Components/Inbox'
import Login from './pages/Login'
import Signup from './pages/Signup'
import './App.css'

function App() {
  const user = JSON.parse(localStorage.getItem('user'))

  return (
    <Router>
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/inbox" />} />
        <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/inbox" />} />

        {/* Protected Routes */}
        <Route
          path="/*"
          element={
            user ? (
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
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </Router>
  )
}

export default App
