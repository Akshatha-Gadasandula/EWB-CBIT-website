export default function Chapters() {
  return (
    <section className="section">
      <div className="container">
        <h2>Chapters</h2>

        <div className="grid-2">
          <div className="card">
            <h3>EWB CBIT Chapter</h3>
            <p className="muted">
              Visit the CBIT chapter page on this site for our info and Instagram embeds.
            </p>
            <p className="muted">
              <a className="button" href="/chapter">Open Chapter page</a>
            </p>
          </div>

          <div className="card">
            <h3>EWB India Chapters (official)</h3>
            <p className="muted">
              EWB India maintains chapter-related content on its website. Use the official pages for the latest.
            </p>
            <ul className="link-list">
              <li>
                <a href="https://www.ewb-india.org/chapters/" target="_blank" rel="noreferrer">https://www.ewb-india.org/chapters/</a>
              </li>
              <li>
                <a href="https://www.ewb-india.org/chapters-meet-gallery/" target="_blank" rel="noreferrer">https://www.ewb-india.org/chapters-meet-gallery/</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
