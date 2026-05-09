import { programs } from '../../data/programs'
import './Programs.css'

function ProgramCard({ program, delay }) {
  return (
    <article className={`program-card ${program.featured ? 'featured' : ''} reveal reveal-delay-${delay}`}>
      <img
        className="program-img"
        src={program.image}
        alt={program.name}
        loading="lazy"
      />
      <div className="program-overlay" />
      <div className="program-content">
        <div className="program-cat">{program.category}</div>
        <div className="program-name">{program.name}</div>
        <div className="program-desc">{program.description}</div>
        <span className="program-tag">{program.tag}</span>
      </div>
    </article>
  )
}

export default function Programs() {
  return (
    <section id="programs" className="programs">

      <div className="programs-header">
        <div>
          <p className="section-label reveal">Nos Disciplines</p>
          <h2 className="section-title reveal reveal-delay-1">
            CHOISISSEZ<br />VOTRE COMBAT
          </h2>
        </div>
        <p className="section-sub reveal">
          Des programmes pour tous les niveaux,<br />
          du débutant au compétiteur.
        </p>
      </div>

      <div className="programs-grid">
        {programs.map((program, i) => (
          <ProgramCard
            key={program.id}
            program={program}
            delay={(i % 3) + 1}
          />
        ))}
      </div>

    </section>
  )
}