import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  const handle = () => {
    if (email) { setDone(true); setEmail('') }
  }

  return (
    <section style={s.section}>
      <div style={s.decorPurple}></div>
      <div style={s.decorPurple2}></div>
      <div style={s.curlTop}>
        <svg width="120" height="60" viewBox="0 0 120 60" fill="none">
          <path d="M10 50 C30 10, 70 50, 110 10" stroke="#999" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </svg>
      </div>

      <div style={s.inner}>
        <h2 style={s.heading}>
          Subscribe to<br />our newsletter
        </h2>
        <p style={s.sub}>To make your stay special and even more memorable</p>

        {done ? (
          <p style={s.thanks}>Thank you for subscribing! 🎉</p>
        ) : (
          <div style={s.form}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={s.input}
              onKeyDown={e => e.key === 'Enter' && handle()}
            />
            <button style={s.btn} onClick={handle}>Subscribe Now</button>
          </div>
        )}
      </div>

      <style>{`
        .newsletter-form { flex-wrap: wrap; }
        .newsletter-input:focus { outline: none; border-color: var(--dark); }
        .newsletter-btn:hover { background: #333 !important; }
        @media (max-width: 540px) {
          .newsletter-form { flex-direction: column !important; align-items: stretch !important; }
          .newsletter-input { width: 100% !important; }
        }
      `}</style>
    </section>
  )
}

const s = {
  section: {
    background: 'var(--light-green-bg)',
    padding: '100px 24px',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  decorPurple: {
    position: 'absolute',
    right: '5%',
    top: '15%',
    width: '60px',
    height: '80px',
    background: 'var(--primary)',
    borderRadius: '50% 50% 50% 0',
    transform: 'rotate(-20deg)',
    opacity: 0.75,
  },
  decorPurple2: {
    position: 'absolute',
    left: '3%',
    bottom: '10%',
    width: '40px',
    height: '55px',
    background: 'var(--primary)',
    borderRadius: '0 50% 50% 50%',
    transform: 'rotate(20deg)',
    opacity: 0.5,
  },
  curlTop: {
    position: 'absolute',
    top: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    opacity: 0.5,
  },
  inner: {
    position: 'relative',
    zIndex: 1,
    maxWidth: '560px',
    margin: '0 auto',
  },
  heading: {
    fontFamily: 'var(--font-display)',
    fontSize: '52px',
    fontWeight: '700',
    lineHeight: '1.2',
    color: 'var(--dark)',
    marginBottom: '16px',
    letterSpacing: '-0.5px',
  },
  sub: {
    fontSize: '14px',
    color: 'var(--gray)',
    marginBottom: '36px',
    fontWeight: '300',
  },
  form: {
    display: 'flex',
    gap: '0',
    justifyContent: 'center',
    borderRadius: '6px',
    overflow: 'hidden',
    boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
    maxWidth: '420px',
    margin: '0 auto',
  },
  input: {
    flex: 1,
    padding: '14px 20px',
    fontSize: '14px',
    border: '1px solid rgba(0,0,0,0.15)',
    borderRight: 'none',
    fontFamily: 'var(--font-body)',
    background: 'var(--white)',
    minWidth: '0',
    borderRadius: '6px 0 0 6px',
  },
  btn: {
    padding: '14px 24px',
    background: 'var(--dark)',
    color: 'var(--white)',
    fontSize: '14px',
    fontWeight: '500',
    fontFamily: 'var(--font-body)',
    transition: 'background 0.2s',
    whiteSpace: 'nowrap',
    borderRadius: '0 6px 6px 0',
  },
  thanks: {
    fontSize: '16px',
    color: 'var(--dark)',
    fontWeight: '500',
  },
}