import { Sun, Moon } from 'lucide-react'
import './Header.css'

function Header({ isDarkMode, onThemeToggle }) {
  return (
    <header className="header">
      <div className="header-left"></div>
      
      <h1 className="header-title">Calendar</h1>
      
      <div className="header-right">
        <div className="toggle-switch" onClick={onThemeToggle} title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
          <div className={`toggle-track ${isDarkMode ? 'dark' : 'light'}`}>
            <div className="toggle-circle">
              {isDarkMode ? <Sun size={20} color="#fefefe" /> : <Moon size={20} color="#ffffff" />}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
