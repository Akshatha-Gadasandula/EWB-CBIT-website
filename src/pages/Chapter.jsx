import { useEffect } from 'react'
import { ensureInstagramEmbedScript, useSiteData } from '../siteData.jsx'

export default function Chapter() {
  const { chapter, insta } = useSiteData()

  const instagramProfileUrl = insta?.profileUrl || 'https://www.instagram.com/ewbcbit/?hl=en'

  useEffect(() => {
    const postUrls = insta?.postUrls
    if (!Array.isArray(postUrls) || postUrls.length === 0) return

    ensureInstagramEmbedScript()

    const handle = window.setTimeout(() => {
      if (window.instgrm?.Embeds?.process) {
        window.instgrm.Embeds.process()
      }
    }, 0)

    return () => window.clearTimeout(handle)
  }, [insta])

  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <h1 className="hero-title">{chapter?.chapterName || 'EWB CBIT'} Chapter</h1>
            <p className="hero-lede">{chapter?.about || 'Add a short chapter description in public/config/chapter.json.'}</p>
            <div className="hero-cta">
              <a className="button primary" href={instagramProfileUrl} target="_blank" rel="noreferrer">
                Follow on Instagram
              </a>
              <a className="button" href="https://www.ewb-india.org/" target="_blank" rel="noreferrer">
                EWB India
              </a>
            </div>
          </div>

          <div className="hero-card" role="region" aria-label="Chapter quick info">
            <div className="kv">
              <div className="kv-label">Institute</div>
              <div className="kv-value">{chapter?.institute || 'Chaitanya Bharathi Institute of Technology (CBIT)'}</div>
            </div>
            <div className="kv">
              <div className="kv-label">Location</div>
              <div className="kv-value">{chapter?.location || 'Hyderabad, India'}</div>
            </div>
            <div className="kv">
              <div className="kv-label">Email</div>
              <div className="kv-value">
                {chapter?.email ? <a href={`mailto:${chapter.email}`}>{chapter.email}</a> : 'Add email in public/config/chapter.json'}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Chapter details</h2>
          <div className="grid-3">
            <div className="card">
              <h3>What we do</h3>
              <p className="muted">{chapter?.whatWeDo || 'Add activities in public/config/chapter.json.'}</p>
            </div>
            <div className="card">
              <h3>How to join</h3>
              <p className="muted">{chapter?.howToJoin || 'Add joining instructions in public/config/chapter.json.'}</p>
            </div>
            <div className="card">
              <h3>Meetings</h3>
              <p className="muted">{chapter?.meetings || 'Add meeting cadence in public/config/chapter.json.'}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2>Instagram</h2>
          <p className="muted">
            Instagram doesn’t allow anonymous scraping of profile feeds. This page uses Instagram’s official embed for specific post URLs.
            Add post URLs in <span className="mono">public/config/instagram.json</span>.
          </p>

          <div className="insta-grid" aria-live="polite">
            {Array.isArray(insta?.postUrls) && insta.postUrls.length > 0 ? (
              insta.postUrls.map((url) => (
                <div className="card" key={url} style={{ padding: 0, overflow: 'hidden' }}>
                  <blockquote
                    className="instagram-media"
                    data-instgrm-permalink={url}
                    data-instgrm-version="14"
                    style={{ background: 'transparent' }}
                  />
                </div>
              ))
            ) : (
              <div className="card">
                <h3>Set up Instagram posts</h3>
                <p className="muted">
                  Open the Instagram profile, copy 2–6 post URLs, then paste them into <span className="mono">public/config/instagram.json</span>.
                </p>
              </div>
            )}
          </div>

          <div className="card" style={{ marginTop: 16 }}>
            <h3>Follow us</h3>
            <p className="muted">
              <a href={instagramProfileUrl} target="_blank" rel="noreferrer">@ewbcbit on Instagram</a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
