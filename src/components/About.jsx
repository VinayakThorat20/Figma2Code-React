export default function About() {
  return (
    <section style={s.section}>
      <div style={s.container}>

        <div style={s.card}>
          <div style={s.cardLeft}>
            <div style={s.glowBg}></div>
            <h2 style={s.cardTitle}>
              <span style={s.underline}>Tomorrow</span> should<br />
              be better than today
            </h2>
            <p style={s.cardText}>
              We are a team of strategists, designers communicators, researchers,
              Togsether, we belive that progress only happens when you refuse to play things safe.
            </p>
            <a href="#" style={s.readMore}>
              Read more &nbsp;›
            </a>
          </div>
          <div style={s.cardRight}>
            <div style={s.imageCircle}>
              <div style={{ ...s.imgPlaceholder, background: '#C4B5A0' }}>
                <svg width="100%" height="100%" viewBox="0 0 200 200">
                  <rect width="200" height="200" fill="#C4B5A0" />
                  <circle cx="100" cy="75" r="35" fill="rgba(255,255,255,0.4)" />
                  <ellipse cx="100" cy="160" rx="55" ry="40" fill="rgba(255,255,255,0.3)" />
                </svg>
              </div>
            </div>
            <div style={s.redTriangle1}></div>
            <div style={s.redTriangle2}></div>
          </div>
        </div>

        <div style={{ ...s.card, ...s.cardReverse }}>
          <div style={s.cardRight}>
            <div style={s.imageCircle}>
              <div style={{ ...s.imgPlaceholder, background: '#8BA888' }}>
                <svg width="100%" height="100%" viewBox="0 0 200 200">
                  <rect width="200" height="200" fill="#8BA888" />
                  <circle cx="100" cy="75" r="35" fill="rgba(255,255,255,0.4)" />
                  <ellipse cx="100" cy="160" rx="55" ry="40" fill="rgba(255,255,255,0.3)" />
                </svg>
              </div>
            </div>
            <div style={s.redTriangle3}></div>
            <div style={s.redTriangle4}></div>
          </div>
          <div style={s.cardLeft}>
            <h2 style={{ ...s.cardTitle, fontSize: '36px' }}>
              See how we can<br />help you progress
            </h2>
            <p style={s.cardText}>
              We add a layer of fearless insights and action that allows change makers to accelerate
              their progress in areas such as brand, design digital, comms and social research.
            </p>
            <a href="#" style={s.readMore}>
              Read more ——
            </a>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-card { flex-direction: column !important; }
          .about-card-reverse { flex-direction: column !important; }
        }
      `}</style>
    </section>
  )
}

const s = {
  section: {
    padding: '80px 24px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '80px',
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    gap: '60px',
    flexWrap: 'wrap',
  },
  cardReverse: {
    flexDirection: 'row',
  },
  cardLeft: {
    flex: 1,
    minWidth: '280px',
    position: 'relative',
  },
  cardRight: {
    flex: 1,
    minWidth: '260px',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  glowBg: {
    position: 'absolute',
    right: '-20px',
    top: '-30px',
    width: '180px',
    height: '180px',
    background: 'radial-gradient(circle, rgba(249,168,201,0.4) 0%, transparent 70%)',
    borderRadius: '50%',
    pointerEvents: 'none',
  },
  cardTitle: {
    fontFamily: 'var(--font-display)',
    fontSize: '32px',
    fontWeight: '600',
    lineHeight: '1.3',
    color: 'var(--dark)',
    marginBottom: '20px',
    position: 'relative',
  },
  underline: {
    borderBottom: '2.5px solid var(--accent-red)',
    paddingBottom: '1px',
    fontStyle: 'italic',
  },
  cardText: {
    fontSize: '14px',
    color: 'var(--gray)',
    lineHeight: '1.75',
    marginBottom: '20px',
    fontWeight: '300',
  },
  readMore: {
    fontSize: '13px',
    fontWeight: '500',
    color: 'var(--dark)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    borderBottom: '1px solid var(--dark)',
    paddingBottom: '2px',
  },
  imageCircle: {
    width: '260px',
    height: '260px',
    borderRadius: '50%',
    overflow: 'hidden',
    boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
  },
  imgPlaceholder: {
    width: '100%',
    height: '100%',
  },
  redTriangle1: {
    position: 'absolute',
    right: '-10px',
    top: '-20px',
    width: 0,
    height: 0,
    borderLeft: '30px solid transparent',
    borderRight: '30px solid transparent',
    borderBottom: '52px solid var(--accent-red)',
    opacity: 0.85,
  },
  redTriangle2: {
    position: 'absolute',
    right: '30px',
    bottom: '-15px',
    width: 0,
    height: 0,
    borderLeft: '22px solid transparent',
    borderRight: '22px solid transparent',
    borderBottom: '38px solid var(--accent-red)',
    opacity: 0.6,
  },
  redTriangle3: {
    position: 'absolute',
    left: '-10px',
    top: '-10px',
    width: 0,
    height: 0,
    borderLeft: '28px solid transparent',
    borderRight: '28px solid transparent',
    borderBottom: '48px solid var(--accent-red)',
    opacity: 0.85,
  },
  redTriangle4: {
    position: 'absolute',
    left: '30px',
    bottom: '-10px',
    width: 0,
    height: 0,
    borderLeft: '20px solid transparent',
    borderRight: '20px solid transparent',
    borderBottom: '35px solid var(--accent-red)',
    opacity: 0.6,
  },
}