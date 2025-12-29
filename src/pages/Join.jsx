import { useSiteData } from '../siteData.jsx'

export default function Join() {
  const { chapter } = useSiteData()

  return (
    <section className="section">
      <div className="container">
        <h2>Join</h2>
        <div className="grid-2">
          <div className="card">
            <h3>Join the CBIT Chapter</h3>
            <p className="muted">{chapter?.howToJoin || 'Add joining instructions in public/config/chapter.json.'}</p>
          </div>
          <div className="card">
            <h3>EWB India joining</h3>
            <p className="muted">
              For national membership and official resources, use the EWB India joining page.
            </p>
            <p className="muted">
              <a href="https://www.ewb-india.org/joining/" target="_blank" rel="noreferrer">https://www.ewb-india.org/joining/</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
