import { pricingPlans } from '../../data/pricing'
import './Pricing.css'

function PriceCard({ plan, delay }) {
  const isJournee = plan.id.startsWith('jour')

  return (
    <div className={`price-card ${plan.featured ? 'featured' : ''} reveal reveal-delay-${delay}`}>
      {plan.featured && (
        <div className="price-popular">POPULAIRE</div>
      )}

      <div className="price-tier">{plan.tier}</div>

      <div className="price-amount">
        <span className="price-num">{plan.price}K</span>
        <span className="price-cur">FCFA</span>
        <span className="price-per">
          {isJournee ? '/ jour' : '/ mois'}
        </span>
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
        Choisir cette offre
      </a>
    </div>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="pricing">

      <div className="pricing-header">
        <div>
          <p className="section-label reveal">Tarifs</p>
          <h2 className="section-title reveal reveal-delay-1">
            NOS OFFRES<br />
            <span className="accent">& ABONNEMENTS</span>
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
            delay={(i % 2) + 1}
          />
        ))}
      </div>

    </section>
  )
}