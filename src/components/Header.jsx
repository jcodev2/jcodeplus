/* **************** Imports **************** */
// Disney+ Header
import { useState } from 'react'
import logo from '../assets/svg/logo.svg'
import styles from '../styles/Header.css'
import Navigation from './Navigation'

/* **************** Variables **************** */

/* **************** Functions **************** */
const Header = () => {
  const [user, setUser] = useState(null)

  const handleLogout = () => {
    setUser(null)
  }
  const handleLogin = (user) => {
    setUser(user)
  }

  return (
    <header className='header'>
      <div className='header-logo'>
        <img src={logo} alt='logo' />
      </div>

      <Navigation />

      <div className='header-user'>
        {user ? (
          <>
            <span>{user.name}</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <button onClick={() => handleLogin({ name: 'John Doe' })}>
            Login
          </button>
        )}
      </div>
    </header>
  )
}

/* **************** Code Execution **************** */
export default Header
