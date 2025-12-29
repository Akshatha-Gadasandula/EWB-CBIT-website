import { useSiteData } from '../siteData.jsx'

export default function Activities() {
  const { ewbIndia } = useSiteData()

  return (
    <section className="section">
      <div className="container">
        <h2>Activities</h2>
        <div className="grid-2">
          <div className="card">
            <h3>Initiating a New Project (EWB India)</h3>
            <p className="muted">
              EWB India describes a process for defining project activities using a Project Application Form (PAF).
              See the official activities page for the latest guidance and examples.
            </p>
            <p className="muted">
              <a href="https://www.ewb-india.org/activities/" target="_blank" rel="noreferrer">https://www.ewb-india.org/activities/</a>
            </p>
            {ewbIndia?.attributionText && ewbIndia?.sourceUrl ? (
              <p className="tiny muted">{ewbIndia.attributionText} <a href={ewbIndia.sourceUrl} target="_blank" rel="noreferrer">{ewbIndia.sourceUrl}</a></p>
            ) : null}
          </div>

          <div className="card">
            <h3>What we do (chapter)</h3>
            <p className="muted">
              For chapter-specific workshops, design sprints, outreach, and project planning, see the Chapter page.
            </p>
            <p className="muted">
              <a className="button" href="/chapter">Go to Chapter</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
