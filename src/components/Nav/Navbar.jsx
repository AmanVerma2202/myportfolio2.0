import React, { useState, useEffect } from 'react'
import { navItems } from '../../Data/Data'
import Name from '../Name/Name'
import './Navbar.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (e, link) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.querySelector(link)
    if (el) {
      const offset = 80
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-inner">
        <a href="#home" className="navbar-logo" onClick={(e) => handleClick(e, '#home')}>
          <Name fontSize={22} />
        </a>
        <button
          className={`navbar-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          type="button"
        >
          <span /><span /><span />
        </button>
        <ul className={`navbar-links ${menuOpen ? 'visible' : ''}`}>
          {navItems.map((item) => (
            <li key={item.name}>
              <a href={item.link} onClick={(e) => handleClick(e, item.link)}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
