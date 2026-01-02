import { useSiteData } from '../siteData.jsx'

export default function Contact() {
  const { chapter } = useSiteData()

  return (
    <section className="section alt contact-bg">
      <div className="container">
        <h2>Contact</h2>
        <div className="grid-2">
          <div className="card">
            <h3>Chapter Email</h3>
            <p className="muted">
              {chapter?.email ? <a href={`mailto:${chapter.email}`}>{chapter.email}</a> : 'ewbcbit@gmail.com'}
            </p>
          </div>
          <div className="card">
            <h3>Links</h3>
            <ul className="link-list">
              <li>
                <a href="https://www.ewb-india.org/" target="_blank" rel="noreferrer">EWB India</a>
              </li>
              <li>
                <a href="https://www.instagram.com/ewbcbit/?hl=en" target="_blank" rel="noreferrer">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
