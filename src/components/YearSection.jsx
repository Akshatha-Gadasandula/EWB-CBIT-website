import React, { useState } from 'react'
import EventCard from './EventCard'

export default function YearSection({ year, events = [] }) {
  const [open, setOpen] = useState(true)

  return (
    <section className="mb-6">
      <header className="year-header">
        <h3>{year}</h3>
        <button aria-expanded={open} onClick={() => setOpen((v) => !v)} className="button">
          {open ? 'Collapse' : 'Expand'}
        </button>
      </header>

      {open && (
        <div className="events-grid grid-3">
          {events.map((ev) => (
            <EventCard key={ev.id || ev.title} title={ev.title} description={ev.description} images={ev.images} />
          ))}
        </div>
      )}
    </section>
  )
}
