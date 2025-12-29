import { useSiteData } from '../siteData.jsx'

export default function About() {
  const { ewbIndia } = useSiteData()

  return (
    <section className="section">
      <div className="container">
        <h2>About</h2>
        <div className="grid-2">
          <div className="card">
            <h3>Engineers Without Borders – India (sourced)</h3>
            <p className="muted">{ewbIndia?.whoWeAre || 'Loading…'}</p>
            {ewbIndia?.attributionText && ewbIndia?.sourceUrl ? (
              <p className="tiny muted">
                {ewbIndia.attributionText} <a href={ewbIndia.sourceUrl} target="_blank" rel="noreferrer">{ewbIndia.sourceUrl}</a>
              </p>
            ) : null}
          </div>
          <div className="card">
            <h3>CBIT Chapter</h3>
            <p className="muted">
              This site is for the EWB CBIT student chapter. Chapter-specific information and Instagram embeds are on the Chapter page.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
