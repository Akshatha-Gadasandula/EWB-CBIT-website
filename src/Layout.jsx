import { NavLink, Outlet } from 'react-router-dom'
import { useSiteData } from './siteData.jsx'

export default function Layout() {
  const { chapter, insta } = useSiteData()

  const instagramProfileUrl = insta?.profileUrl || 'https://www.instagram.com/ewbcbit/?hl=en'

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <div className="container header-inner">
          <div className="brand">
            <div className="brand-mark">
              <img src="/images/logo.png" alt="EWB CBIT logo" className="brand-logo" />
            </div>
            <div>
              <div className="brand-title">{chapter?.chapterName || 'EWB CBIT'}</div>
              <div className="brand-subtitle">Engineers Without Borders — CBIT Chapter</div>
            </div>
          </div>

          <nav className="nav" aria-label="Primary">
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/join">Join</NavLink>
            <NavLink to="/activities">Activities</NavLink>
            <NavLink to="/chapters">Chapters</NavLink>
            <NavLink to="/chapter">CBIT - Chapter</NavLink>
            <NavLink to="/donors">Donors</NavLink>
            <NavLink to="/donate">Donate</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </div>
      </header>

      <main id="main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container">
          <p className="tiny muted">
            Instagram: <a href={instagramProfileUrl} target="_blank" rel="noreferrer">@ewbcbit</a>
          </p>
          {/* footer note removed per request */}
        </div>
      </footer>
    </>
  )
}
