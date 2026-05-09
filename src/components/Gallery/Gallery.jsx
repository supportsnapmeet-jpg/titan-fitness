import './Gallery.css'

const images = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&q=80',
    alt: 'Salle principale',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=700&q=80',
    alt: 'Haltérophilie',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=700&q=80',
    alt: 'Cardio',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?w=700&q=80',
    alt: 'Cours collectif',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=700&q=80',
    alt: 'Zone boxe',
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="gallery">

      <p className="section-label reveal">Notre Espace</p>
      <h2 className="section-title reveal reveal-delay-1">
        VISITE<br />
        <span className="accent">LE GYM</span>
      </h2>

      <div className="gallery-grid">
        {images.map((img) => (
          <div key={img.id} className="gallery-item">
            <img
              className="gallery-img"
              src={img.src}
              alt={img.alt}
              loading="lazy"
            />
          </div>
        ))}
      </div>

    </section>
  )
}