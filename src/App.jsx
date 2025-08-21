import './App.css'
import { useState } from 'react'
import Navebar from './components/Navebar/Navebar'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const handleLoginClick = () => {
    setCurrentPage('login')
  }

  const handleSignUpClick = () => {
    setCurrentPage('signup')
  }

  const handleBackToHome = () => {
    setCurrentPage('home')
  }

  // Render login page
  if (currentPage === 'login') {
    return <Login onBackToHome={handleBackToHome} onSignUpClick={handleSignUpClick} />
  }

  // Render sign up page
  if (currentPage === 'signup') {
    return <SignUp onBackToHome={handleBackToHome} onLoginClick={handleLoginClick} />
  }

  // Render home page
  return (
    <div
      className="min-h-screen w-full relative"
      style={{
        // backgroundImage: `url('/src/assets/datascience.jpg')`,
        backgroundColor: 'white',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        width: '100%'
      }}
    >
      {/* Background overlay for better readability */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50"
        style={{ zIndex: 0 }}
      ></div>
      
      {/* Content container */}
      <div className="relative z-10">
        <Navebar onLoginClick={handleLoginClick} onSignUpClick={handleSignUpClick} />
        

        
        {/* Main content area - now empty */}
        <main className="pt-20">
          {/* Empty main content area */}
        </main>
      </div>
    </div>
  )
}

export default App
