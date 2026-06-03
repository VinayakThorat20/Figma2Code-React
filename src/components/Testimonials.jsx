const avatarColors = ['#C4A882', '#8BA8C4', '#C48BA8', '#A8C48B', '#B8A8C4']

export default function Testimonials() {
  return (
    <section style={s.section}>
      <div style={s.container}>
        <div style={s.leftAvatars}>
          {[0, 1, 2].map(i => (
            <div key={i} style={{ ...s.sideAvatar, background: avatarColors[i], width: i === 1 ? 56 : 44, height: i === 1 ? 56 : 44 }}>
              <svg width="100%" height="100%" viewBox="0 0 60 60">
                <circle cx="30" cy="22" r="12" fill="rgba(255,255,255,0.5)" />
                <ellipse cx="30" cy="50" rx="18" ry="12" fill="rgba(255,255,255,0.4)" />
              </svg>
            </div>
          ))}
        </div>

        <div style={s.center}>
          <h2 style={s.heading}>
            <span style={s.yellowUnder}>What our customer</span>
            <br />says{' '}
            <span style={s.underlineBlack}>About Us</span>
          </h2>

          <div style={s.quoteCard}>
            <span style={s.quoteOpen}>"</span>
            <p style={s.quoteText}>
              Elementum delivered the site with inthe timeline as they requested. Inthe end, the
              client found a 50% increase in traffic with in days since its launch. They also had an
              impressive ability to use technologies that the company hasnt used, which have also
              proved to be easy to use and reliable.
            </p>
            <span style={s.quoteClose}>"</span>
          </div>
        </div>

        <div style={s.rightAvatars}>
          {[3, 4, 0].map((ci, i) => (
            <div key={i} style={{ ...s.sideAvatar, background: avatarColors[ci], width: i === 0 ? 48 : i === 1 ? 64 : 72, height: i === 0 ? 48 : i === 1 ? 64 : 72 }}>
              <svg width="100%" height="100%" viewBox="0 0 60 60">
                <circle cx="30" cy="22" r="12" fill="rgba(255,255,255,0.5)" />
                <ellipse cx="30" cy="50" rx="18" ry="12" fill="rgba(255,255,255,0.4)" />
              </svg>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .testimonial-side { display: none !important; }
          .testimonial-container { flex-direction: column !important; }
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
    alignItems: 'center',
    gap: '40px',
  },
  leftAvatars: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    alignItems: 'center',
    flexShrink: 0,
  },
  rightAvatars: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    alignItems: 'center',
    flexShrink: 0,
  },
  sideAvatar: {
    borderRadius: '50%',
    overflow: 'hidden',
    boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
  },
  center: {
    flex: 1,
    textAlign: 'center',
  },
  heading: {
    fontFamily: 'var(--font-display)',
    fontSize: '36px',
    fontWeight: '600',
    lineHeight: '1.3',
    color: 'var(--dark)',
    marginBottom: '32px',
  },
  yellowUnder: {
    borderBottom: '2px solid #F5C842',
    paddingBottom: '2px',
  },
  underlineBlack: {
    borderBottom: '2px solid var(--dark)',
    paddingBottom: '2px',
  },
  quoteCard: {
    background: 'var(--white)',
    borderRadius: '16px',
    padding: '32px 40px',
    boxShadow: '0 4px 32px rgba(0,0,0,0.08)',
    position: 'relative',
    maxWidth: '520px',
    margin: '0 auto',
  },
  quoteOpen: {
    position: 'absolute',
    top: '12px',
    left: '20px',
    fontFamily: 'var(--font-display)',
    fontSize: '72px',
    lineHeight: '1',
    color: 'rgba(0,0,0,0.08)',
  },
  quoteClose: {
    position: 'absolute',
    bottom: '0px',
    right: '20px',
    fontFamily: 'var(--font-display)',
    fontSize: '72px',
    lineHeight: '1',
    color: 'rgba(0,0,0,0.08)',
  },
  quoteText: {
    fontSize: '14px',
    color: 'var(--gray)',
    lineHeight: '1.8',
    fontWeight: '300',
    position: 'relative',
    zIndex: 1,
  },
}