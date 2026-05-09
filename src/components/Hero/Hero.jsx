import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg" />
      <div className="hero-overlay" />
      <div className="hero-line" />

      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          🔥 Abidjan · Côte d'Ivoire
        </div>

        <h1 className="hero-title">
          FORGE<br />
          <span className="outline">TON</span><br />
          <span className="accent">CORPS</span>
        </h1>

        <p className="hero-sub">
          La salle de sport premium d'Abidjan. Équipements de niveau mondial,
          coachs certifiés, résultats garantis. Ta transformation commence ici.
        </p>

        <div className="hero-actions">
          <a href="#pricing" className="btn-primary">
            Commencer Maintenant →
          </a>
          <a href="#programs" className="btn-ghost">
            ▶ Nos Programmes
          </a>
        </div>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <span>Défiler</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}