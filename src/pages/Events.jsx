import React, { useEffect, useState } from 'react'
import EventsList from '../components/EventsList'

export default function EventsPage() {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let mounted = true
    fetch('/data/events.json')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
      .then((json) => {
        if (!mounted) return
        setData(json || {})
      })
      .catch((err) => {
        console.error('Failed to load events.json', err)
        if (mounted) setError(String(err))
      })
      .finally(() => mounted && setLoading(false))

    return () => {
      mounted = false
    }
  }, [])

  return (
    <section className="section">
      <div className="container">
        <h2>Year-wise Events</h2>

        {loading ? (
          <p className="muted">Loading events…</p>
        ) : error ? (
          <p className="muted">Failed to load events: {error}</p>
        ) : (
          <EventsList data={data} />
        )}
      </div>
    </section>
  )
}
