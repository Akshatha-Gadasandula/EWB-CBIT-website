import { useSiteData } from '../siteData.jsx'

export default function Home() {
  const { ewbIndia, error, loading } = useSiteData()

  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <h1 className="hero-title">Build sustainable change, together.</h1>
            <p className="hero-lede">
              A multi-page chapter website aligned with Engineers Without Borders — India.
            </p>
            <div className="hero-cta">
              <a className="button primary" href="/chapter">View CBIT Chapter</a>
              <a className="button" href="https://www.ewb-india.org/" target="_blank" rel="noreferrer">
                Visit EWB India
              </a>
            </div>
            {error ? <p className="error">{error}</p> : null}
          </div>

          <div className="hero-card" role="region" aria-label="EWB India snapshot">
            <div className="kv">
              <div className="kv-label">Organization</div>
              <div className="kv-value">{ewbIndia?.name || 'Engineers Without Borders – India'}</div>
            </div>
            <div className="kv">
              <div className="kv-label">Affiliation</div>
              <div className="kv-value">{ewbIndia?.affiliation || 'Affiliated with EWB-International'}</div>
            </div>
            <div className="kv">
              <div className="kv-label">Source</div>
              <div className="kv-value">
                <a href="https://www.ewb-india.org/" target="_blank" rel="noreferrer">
                  ewb-india.org
                </a>
              </div>
            </div>
            <div className="kv">
              <div className="kv-label">Status</div>
              <div className="kv-value">{loading ? 'Loading…' : 'Ready'}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Who we are (EWB India)</h2>
          <p className="muted">
            {ewbIndia?.whoWeAre || 'Loading…'}
          </p>

          <div className="grid-2">
            <div className="card">
              <h3>Mission</h3>
              <p className="muted">{ewbIndia?.mission || 'Loading…'}</p>
            </div>
            <div className="card">
              <h3>Vision</h3>
              <p className="muted">{ewbIndia?.vision || 'Loading…'}</p>
            </div>
          </div>

          <div className="card" style={{ marginTop: 16 }}>
            <h3>Focus SDGs</h3>
            {Array.isArray(ewbIndia?.sdgs) ? (
              <ul className="sdg-list">
                {ewbIndia.sdgs.map((s) => (
                  <li key={s.id}>
                    <span className="pill">SDG {s.id}</span> {s.label}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="muted">Loading…</p>
            )}
            {ewbIndia?.attributionText && ewbIndia?.sourceUrl ? (
              <p className="tiny muted" style={{ marginTop: 10 }}>
                {ewbIndia.attributionText} <a href={ewbIndia.sourceUrl} target="_blank" rel="noreferrer">{ewbIndia.sourceUrl}</a>
              </p>
            ) : null}
          </div>
        </div>
      </section>
    </>
  )
}
