const avatars = [
  { id: 1, bg: '#C9B8A8', size: 90, top: '10%', left: '2%' },
  { id: 2, bg: '#A8B8C9', size: 80, top: '0%', left: '20%' },
  { id: 3, bg: '#C9A8B8', size: 100, top: '15%', left: '38%' },
  { id: 4, bg: '#B8C9A8', size: 85, top: '5%', left: '57%' },
  { id: 5, bg: '#C8BCA8', size: 95, top: '18%', left: '74%' },
  { id: 6, bg: '#A8C9C4', size: 75, top: '2%', left: '88%' },
]

export default function Hero() {
  return (
    <section style={s.section}>
      <div style={s.decorLeft}></div>
      <div style={s.decorPurple}></div>

      <div style={s.container}>
        <div style={s.headingWrap}>
          <h1 style={s.heading}>
            The{' '}
            <span style={s.underlinePink}>thinkers</span>
            {' '}and
            <br />
            doers were{' '}
            <span style={s.highlightPink}>changing</span>
            <br />
            the{' '}
            <span style={s.highlightGreen}>status</span>
            {' '}Quo with
          </h1>
        </div>

        <p style={s.sub}>
          We are a team of strategists, designers communicators, researchers, Togsether,<br />
          we belive that progress only hgppens when you refuse to play things safe.
        </p>

        <div style={s.avatarRow}>
          {avatars.map(a => (
            <div
              key={a.id}
              style={{
                ...s.avatar,
                width: a.size,
                height: a.size,
                background: a.bg,
              }}
            >
              <svg width="100%" height="100%" viewBox="0 0 100 100">
                <circle cx="50" cy="38" r="18" fill="rgba(255,255,255,0.4)" />
                <ellipse cx="50" cy="80" rx="28" ry="20" fill="rgba(255,255,255,0.3)" />
              </svg>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-heading { font-size: 36px !important; }
          .hero-avatars { gap: 10px !important; }
          .hero-avatar { width: 60px !important; height: 60px !important; }
        }
        @media (max-width: 480px) {
          .hero-heading { font-size: 28px !important; }
        }
      `}</style>
    </section>
  )
}

const s = {
  section: {
    position: 'relative',
    padding: '80px 24px 60px',
    maxWidth: '1200px',
    margin: '0 auto',
    overflow: 'hidden',
  },
  decorLeft: {
    position: 'absolute',
    left: '-20px',
    top: '30%',
    width: '60px',
    height: '120px',
    borderRadius: '0 60px 60px 0',
    border: '3px solid var(--accent-red)',
    borderLeft: 'none',
    opacity: 0.7,
  },
  decorPurple: {
    position: 'absolute',
    right: '5%',
    top: '8%',
    width: '48px',
    height: '64px',
    background: 'var(--primary)',
    borderRadius: '50% 50% 50% 0',
    transform: 'rotate(-30deg)',
    opacity: 0.85,
  },
  container: {
    textAlign: 'center',
  },
  headingWrap: {
    marginBottom: '24px',
  },
  heading: {
    fontFamily: 'var(--font-display)',
    fontSize: '64px',
    fontWeight: '700',
    lineHeight: '1.15',
    color: 'var(--dark)',
    letterSpacing: '-1px',
  },
  underlinePink: {
    position: 'relative',
    display: 'inline-block',
    fontStyle: 'italic',
    borderBottom: '3px solid var(--accent-pink)',
    paddingBottom: '2px',
  },
  highlightPink: {
    background: 'var(--accent-pink)',
    borderRadius: '4px',
    padding: '0 6px',
  },
  highlightGreen: {
    background: 'var(--accent-green)',
    borderRadius: '4px',
    padding: '0 6px',
  },
  sub: {
    fontSize: '14px',
    color: 'var(--gray)',
    lineHeight: '1.7',
    maxWidth: '460px',
    margin: '0 auto 48px',
    fontWeight: '300',
  },
  avatarRow: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    gap: '16px',
    flexWrap: 'wrap',
  },
  avatar: {
    borderRadius: '50%',
    overflow: 'hidden',
    border: '3px solid var(--white)',
    boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
    flexShrink: 0,
  },
}