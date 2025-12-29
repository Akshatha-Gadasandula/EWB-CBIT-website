import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section">
      <div className="container">
        <h2>Page not found</h2>
        <div className="card">
          <p className="muted">The page you’re looking for doesn’t exist.</p>
          <p className="muted">
            <Link className="button" to="/">Go home</Link>
          </p>
        </div>
      </div>
    </section>
  )
}
