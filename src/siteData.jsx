import { createContext, useContext, useEffect, useMemo, useState } from 'react'

async function readJson(path) {
  const response = await fetch(path, { cache: 'no-store' })
  if (!response.ok) throw new Error(`Failed to load ${path}: ${response.status}`)
  return response.json()
}

const SiteDataContext = createContext(null)

export function SiteDataProvider({ children }) {
  const [chapter, setChapter] = useState(null)
  const [insta, setInsta] = useState(null)
  const [ewbIndia, setEwbIndia] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        setLoading(true)
        const [chapterJson, instaJson, ewbIndiaJson] = await Promise.all([
          readJson('/config/chapter.json'),
          readJson('/config/instagram.json'),
          readJson('/data/ewb-india.json')
        ])

        if (cancelled) return
        setChapter(chapterJson)
        setInsta(instaJson)
        setEwbIndia(ewbIndiaJson)
        setError(null)
      } catch (err) {
        if (cancelled) return
        setError(err instanceof Error ? err.message : String(err))
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [])

  const value = useMemo(
    () => ({ chapter, insta, ewbIndia, loading, error }),
    [chapter, insta, ewbIndia, loading, error]
  )

  return <SiteDataContext.Provider value={value}>{children}</SiteDataContext.Provider>
}

export function useSiteData() {
  const value = useContext(SiteDataContext)
  if (!value) throw new Error('useSiteData must be used within SiteDataProvider')
  return value
}

export function ensureInstagramEmbedScript() {
  const existing = document.querySelector('script[data-instagram-embed="true"]')
  if (existing) return

  const script = document.createElement('script')
  script.async = true
  script.defer = true
  script.src = 'https://www.instagram.com/embed.js'
  script.dataset.instagramEmbed = 'true'
  document.body.appendChild(script)
}
