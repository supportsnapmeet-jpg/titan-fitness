import { testimonials } from '../../data/testimonials'
import './Testimonials.css'

function StarRating({ count }) {
  return (
    <div className="testi-stars" aria-label={`${count} étoiles sur 5`}>
      {'★'.repeat(count)}
    </div>
  )
}

function TestiCard({ testi, delay }) {
  return (
    <div className={`testi-card reveal reveal-delay-${delay}`}>
      <StarRating count={testi.stars} />
      <p className="testi-text">{testi.text}</p>
      <div className="testi-author">
        <img
          className="testi-avatar"
          src={testi.avatar}
          alt={testi.name}
          loading="lazy"
        />
        <div>
          <div className="testi-name">{testi.name}</div>
          <div className="testi-role">{testi.role}</div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">

      <p className="section-label reveal">Témoignages</p>
      <h2 className="section-title reveal reveal-delay-1">
        ILS ONT<br />
        <span className="accent">TRANSFORMÉ</span><br />
        LEUR VIE
      </h2>

      <div className="testi-grid">
        {testimonials.map((testi, i) => (
          <TestiCard
            key={testi.id}
            testi={testi}
            delay={i + 1}
          />
        ))}
      </div>

    </section>
  )
}