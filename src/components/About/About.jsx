import './About.css'

const features = [
  { icon: '⚡', title: 'Équipement Premium',  desc: 'Machines Technogym importées'              },
  { icon: '🏆', title: 'Coachs Certifiés',    desc: 'Diplômés & certifiés internationalement'   },
  { icon: '📱', title: 'App Mobile',           desc: 'Suivi & réservation en temps réel'         },
  { icon: '🌙', title: 'Ouvert 7j/7',          desc: '5h00 – 23h00 pour tous les rythmes'        },
]

export default function About() {
  return (
    <div id="about" className="about">

      <div className="about-images reveal">
        <img
          className="about-img-main"
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
          alt="Salle principale"
          loading="lazy"
        />
        <img
          className="about-img-side"
          src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80"
          alt="Entraînement"
          loading="lazy"
        />
        <div className="about-badge" aria-hidden="true">
          <span className="about-badge-num">N°1</span>
          <span className="about-badge-txt">Abidjan</span>
        </div>
      </div>

      <div className="about-text">
        <p className="section-label reveal">Notre Histoire</p>
        <h2 className="section-title reveal reveal-delay-1">
          LA SALLE QUI<br />CHANGE DES VIES
        </h2>
        <p className="section-sub reveal reveal-delay-2">
          Depuis 2016, TITAN FITNESS accompagne les Ivoiriens dans leur
          transformation physique et mentale. Chaque corps mérite le meilleur
          — et nous le prouvons chaque jour.
        </p>

        <div className="about-features">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`feat-item reveal reveal-delay-${(i % 2) + 1}`}
            >
              <span className="feat-icon" aria-hidden="true">{f.icon}</span>
              <div>
                <div className="feat-title">{f.title}</div>
                <div className="feat-desc">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}