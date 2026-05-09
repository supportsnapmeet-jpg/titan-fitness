import './Footer.css'

const navLinks = [
  { label: 'À Propos',   href: '#about'        },
  { label: 'Programmes', href: '#programs'      },
  { label: 'Nos Coachs', href: '#coaches'       },
  { label: 'Tarifs',     href: '#pricing'       },
  { label: 'Galerie',    href: '#gallery'       },
]

const horaires = [
  { label: 'Lun – Ven : 5h – 23h'  },
  { label: 'Samedi : 6h – 22h'     },
  { label: 'Dimanche : 7h – 20h'   },
  { label: 'Jours fériés : 8h – 18h' },
]

const contacts = [
  { icon: '📍', text: 'Zone 4, Avenue Houphouët-Boigny, Abidjan' },
  { icon: '📞', text: '+225 07 XX XX XX XX'                       },
  { icon: '✉',  text: 'contact@titanfit.ci'                       },
  { icon: '💬', text: 'WhatsApp Business'                         },
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
            Offre Spéciale
          </p>
          <h2 className="footer-cta-title">
            PREMIÈRE SEMAINE<br />
            <span className="accent">GRATUITE</span>
          </h2>
          <p className="footer-cta-sub">
            Aucun engagement. Viens tester. Vis l'expérience Titan.
          </p>
          <a href="tel:+2250700000000" className="btn-primary">
            🔥 Réserver Mon Essai Gratuit
          </a>
        </div>
      </div>

      {/* Footer principal */}
      <div className="footer-main">
        <div className="footer-top">

          {/* Brand */}
          <div className="footer-brand">
            <a href="#hero" className="logo">
              TITAN<span>.</span>FIT
            </a>
            <p>
              La salle de sport premium d'Abidjan.
              On forge des champions depuis 2016. Rejoins l'élite.
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
            © 2024 <span className="accent">TITAN FITNESS</span>. Tous droits réservés. Abidjan, Côte d'Ivoire.
          </p>
          <p className="footer-copy">
            Paiement : Wave · Orange Money · MTN Money · Espèces
          </p>
        </div>
      </div>

    </footer>
  )
}