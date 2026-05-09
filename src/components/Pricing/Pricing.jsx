import { pricingPlans } from '../../data/pricing'
import './Pricing.css'

function PriceCard({ plan, delay }) {
  return (
    <div className={`price-card ${plan.featured ? 'featured' : ''} reveal reveal-delay-${delay}`}>
      {plan.featured && (
        <div className="price-popular">POPULAIRE</div>
      )}

      <div className="price-tier">{plan.tier}</div>

      <div className="price-amount">
        <span className="price-num">{plan.price}K</span>
        <span className="price-cur">FCFA</span>
        <span className="price-per">/ mois</span>
      </div>

      <p className="price-tagline">{plan.tagline}</p>

      <hr className="price-divider" />

      <ul className="price-features">
        {plan.features.map((f) => (
          <li key={f.label} className={f.included ? '' : 'disabled'}>
            {f.label}
          </li>
        ))}
      </ul>

      <a href="#contact" className="price-btn">
        Choisir {plan.tier}
      </a>
    </div>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="pricing">

      <div className="pricing-header">
        <div>
          <p className="section-label reveal">Abonnements</p>
          <h2 className="section-title reveal reveal-delay-1">
            NOS OFFRES<br />
            <span className="accent">MENSUELLES</span>
          </h2>
        </div>
        <p className="section-sub reveal" style={{ textAlign: 'right', maxWidth: '280px' }}>
          Paiement via Wave, Orange Money,<br />MTN Money ou espèces.
        </p>
      </div>

      <div className="pricing-grid">
        {pricingPlans.map((plan, i) => (
          <PriceCard
            key={plan.id}
            plan={plan}
            delay={i + 1}
          />
        ))}
      </div>

    </section>
  )
}