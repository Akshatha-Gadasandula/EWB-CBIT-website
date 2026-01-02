import React from 'react'

export default function EventCard({ title, description, images = [] }) {
  return (
    <article className="card event-card">
      {images && images.length > 0 && (
        <div className="event-image">
          {/* Show first image as preview; consumers should pass image URLs */}
          <img src={images[0]} alt={title} />
        </div>
      )}

      <div className="card" style={{ padding: 12 }}>
        <h4 className="event-title">{title}</h4>
        <p className="muted" style={{ marginTop: 8 }}>{description}</p>
      </div>
    </article>
  )
}
