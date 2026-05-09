import './Footer.css'

const navLinks = [
  { label: 'À Propos',   href: '#about'    },
  { label: 'Programmes', href: '#programs' },
  { label: 'Nos Coachs', href: '#coaches'  },
  { label: 'Tarifs',     href: '#pricing'  },
  { label: 'Galerie',    href: '#gallery'  },
]

const horaires = [
  { label: 'Lun – Dim : 6h – 22h30' },
  { label: 'Non-stop 7j/7'           },
  { label: 'Ouvert les jours fériés' },
]

const contacts = [
  { icon: '📍', text: 'Non loin de la pharmacie Saint Christophe, Angré, Abidjan' },
  { icon: '📞', text: '+225 07 99 57 89 76'        },
  { icon: '✉',  text: 'contact@ozonefitnessgym.ci' },
  { icon: '💬', text: 'WhatsApp : 07 99 57 89 76'  },
]

const socials = [
  { label: 'f',  href: '#' },
  { label: 'in', href: '#' },
  { label: '📷', href: '#' },
  { label: '𝕏',  href: '#' },
]

export default function Footer() {
  return (
    <footer id="contact" className="footer">

      {/* CTA Banner */}
      <div className="footer-cta">
        <div className="footer-cta-bg" />
        <div className="footer-cta-overlay" />
        <div className="footer-cta-content">
          <p className="section-label" style={{ justifyContent: 'center' }}>
            Rejoins-nous
          </p>
          <h2 className="footer-cta-title">
            COMMENCE<br />
            <span className="accent">AUJOURD'HUI</span>
          </h2>
          <p className="footer-cta-sub">
            Ouvre 7j/7 de 6h à 22h30. Viens tester. Vis l'expérience O'Zone.
          </p>
          <a href="tel:+2250799578976" className="btn-primary">
            💪 Appeler Maintenant
          </a>
        </div>
      </div>

      {/* Footer principal */}
      <div className="footer-main">
        <div className="footer-top">

          {/* Brand */}
          <div className="footer-brand">
            <a href="#hero" className="logo">
              O'ZONE<span>.</span>GYM
            </a>
            <p>
              La salle de sport de référence à Angré, Abidjan.
              Ouverte 7j/7 de 6h à 22h30. Rejoins la famille O'Zone !
            </p>
            <div className="social-links">
              {socials.map((s) => (
                <a key={s.label} href={s.href} className="social-link" aria-label={s.label}>
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="footer-col">
            <h4>Navigation</h4>
            <ul>
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Horaires */}
          <div className="footer-col">
            <h4>Horaires</h4>
            <ul>
              {horaires.map((h) => (
                <li key={h.label}>
                  <span>{h.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>Contact</h4>
            {contacts.map((c) => (
              <div key={c.text} className="contact-item">
                <span className="contact-icon">{c.icon}</span>
                <span>{c.text}</span>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © 2025 <span className="accent">O'ZONE FITNESS GYM</span>. Tous droits réservés. Angré, Abidjan.
          </p>
          <p className="footer-copy">
            Paiement : Wave · Orange Money · MTN Money · Espèces
          </p>
        </div>
      </div>

    </footer>
  )
}