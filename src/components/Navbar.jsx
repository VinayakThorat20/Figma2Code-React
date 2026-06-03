import { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = ['Home', 'Studio', 'Services', 'Contact', 'FAQs']

  return (
    <nav style={s.nav}>
      <div style={s.inner}>
        <span style={s.logo}>Elementum</span>

        <ul style={s.links}>
          {links.map(l => (
            <li key={l}>
              <a href="#" style={s.link}>{l}</a>
            </li>
          ))}
        </ul>

        <button style={s.hamburger} onClick={() => setOpen(!open)}>
          {open ? <RiCloseLine size={24} /> : <RiMenu3Line size={24} />}
        </button>
      </div>

      {open && (
        <ul style={s.mobileMenu}>
          {links.map(l => (
            <li key={l} style={s.mobileItem}>
              <a href="#" style={s.mobileLink} onClick={() => setOpen(false)}>{l}</a>
            </li>
          ))}
        </ul>
      )}

      <style>{`
        nav a:hover { opacity: 0.6; transition: opacity 0.2s; }
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
        @media (min-width: 769px) {
          .nav-hamburger { display: none !important; }
        }
      `}</style>
    </nav>
  )
}

const s = {
  nav: {
    position: 'sticky',
    top: 0,
    zIndex: 100,
    background: 'rgba(255,255,255,0.96)',
    backdropFilter: 'blur(8px)',
    borderBottom: '1px solid rgba(0,0,0,0.06)',
  },
  inner: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
    height: '64px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    fontFamily: 'var(--font-display)',
    fontSize: '20px',
    fontWeight: '600',
    color: 'var(--dark)',
    letterSpacing: '-0.3px',
  },
  links: {
    display: 'flex',
    gap: '36px',
    listStyle: 'none',
  },
  link: {
    fontSize: '14px',
    fontWeight: '400',
    color: 'var(--dark)',
    fontFamily: 'var(--font-body)',
    transition: 'opacity 0.2s',
  },
  hamburger: {
    display: 'none',
    background: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4px',
    color: 'var(--dark)',
  },
  mobileMenu: {
    listStyle: 'none',
    background: 'var(--white)',
    borderTop: '1px solid rgba(0,0,0,0.06)',
    padding: '12px 0',
  },
  mobileItem: {
    padding: '0',
  },
  mobileLink: {
    display: 'block',
    padding: '12px 24px',
    fontSize: '15px',
    fontWeight: '400',
    color: 'var(--dark)',
  },
}