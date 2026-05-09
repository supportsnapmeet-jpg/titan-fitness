import { useCounter } from '../../hooks/useCounter'
import './Stats.css'

const stats = [
  { target: 2400, suffix: '+', label: 'Membres Actifs'      },
  { target: 18,   suffix: '',  label: 'Coachs Certifiés'    },
  { target: 40,   suffix: '+', label: 'Cours / Semaine'     },
  { target: 8,    suffix: '',  label: "Années d'Excellence" },
]

function StatItem({ target, suffix, label }) {
  const { ref, display } = useCounter(target)

  return (
    <div className="stat-item" ref={ref}>
      <span className="stat-number">
        {display.toLocaleString('fr-FR')}{suffix}
      </span>
      <span className="stat-label">{label}</span>
    </div>
  )
}

export default function Stats() {
  return (
    <div id="stats" className="stats">
      <div className="stats-grid">
        {stats.map((s) => (
          <StatItem key={s.label} {...s} />
        ))}
      </div>
    </div>
  )
}