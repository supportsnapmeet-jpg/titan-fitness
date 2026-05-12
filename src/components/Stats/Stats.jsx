import { useCounter } from '../../hooks/useCounter'
import './Stats.css'

const stats = [
  { target: 500,  suffix: '+', label: 'Membres Actifs'      },
  { target: 5,    suffix: '',  label: 'Coachs Certifiés'    },
  { target: 7,    suffix: 'j/7', label: 'Ouvert'            },
  { target: 6,    suffix: 'h – 22h30', label: 'Horaires'    },
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