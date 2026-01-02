import React from 'react'
import YearSection from './YearSection'

/**
 * EventsList
 * props:
 *   data: { [year]: [ { title, description, images } ] }
 */
export default function EventsList({ data = {} }) {
  const years = Object.keys(data).sort((a, b) => b - a)

  return (
    <div>
      {years.length === 0 ? (
        <p className="muted">No events available yet.</p>
      ) : (
        years.map((year) => <YearSection key={year} year={year} events={data[year]} />)
      )}
    </div>
  )
}
