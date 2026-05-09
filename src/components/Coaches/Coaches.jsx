import { coaches } from '../../data/coaches'
import './Coaches.css'

function CoachCard({ coach, delay }) {
  return (
    <div className={`coach-card reveal reveal-delay-${delay}`}>
      <div className="coach-img-wrap">
        <img
          className="coach-img"
          src={coach.image}
          alt={coach.name}
          loading="lazy"
        />
        <div className="coach-rank">{coach.rank}</div>
      </div>
      <div className="coach-info">
        <div className="coach-name">{coach.name}</div>
        <div className="coach-spec">{coach.specialty}</div>
      </div>
    </div>
  )
}

export default function Coaches() {
  return (
    <section id="coaches" className="coaches">

      <p className="section-label reveal">L'Équipe</p>
      <h2 className="section-title reveal reveal-delay-1">
        NOS COACHS<br />
        <span className="accent">D'ÉLITE</span>
      </h2>

      <div className="coaches-grid">
        {coaches.map((coach, i) => (
          <CoachCard
            key={coach.id}
            coach={coach}
            delay={(i % 4) + 1}
          />
        ))}
      </div>

    </section>
  )
}