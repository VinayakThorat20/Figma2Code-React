import { HiArrowRight } from 'react-icons/hi'

const items = [
  {
    label: 'Office of multiple\ninterest content',
    title: 'Colaborative & partnership',
  },
  {
    label: 'The hanger US Air force\ndigital experimental',
    title: 'We talk about our weight',
  },
  {
    label: 'Delta faucet content,\nsocial, digital',
    title: 'Piloting digital confidence',
  },
]

export default function Offerings() {
  return (
    <section style={s.section}>
      <div style={s.container}>
        <div style={s.headingRow}>
          <h2 style={s.heading}>
            What we <span style={s.greenBox}>can</span>
            <br />offer you!
          </h2>
          <div style={s.curlLine}>
            <svg width="200" height="80" viewBox="0 0 200 80" fill="none">
              <path
                d="M0 60 C40 60, 60 10, 100 20 S160 60, 200 20"
                stroke="#E8453C"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        <div style={s.list}>
          {items.map((item, i) => (
            <div key={i} style={s.row}>
              <p style={s.label}>{item.label}</p>
              <div style={s.divider}></div>
              <div style={s.titleRow}>
                <span style={s.title}>{item.title}</span>
                <HiArrowRight size={20} color="var(--dark)" style={{ flexShrink: 0 }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .offering-row { flex-direction: column !important; gap: 10px !important; }
          .offering-label { width: 100% !important; }
          .offering-title-row { width: 100% !important; }
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
  container: {},
  headingRow: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '20px',
    marginBottom: '60px',
    flexWrap: 'wrap',
  },
  heading: {
    fontFamily: 'var(--font-display)',
    fontSize: '56px',
    fontWeight: '700',
    lineHeight: '1.15',
    color: 'var(--dark)',
    letterSpacing: '-0.5px',
  },
  greenBox: {
    background: 'var(--accent-green)',
    borderRadius: '4px',
    padding: '0 8px',
    fontStyle: 'italic',
  },
  curlLine: {
    alignSelf: 'flex-end',
    marginBottom: '8px',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    gap: '40px',
    padding: '28px 0',
    borderTop: '1px solid rgba(0,0,0,0.1)',
    flexWrap: 'wrap',
  },
  label: {
    width: '200px',
    fontSize: '13px',
    color: 'var(--gray)',
    lineHeight: '1.6',
    whiteSpace: 'pre-line',
    flexShrink: 0,
  },
  divider: {
    display: 'none',
  },
  titleRow: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '16px',
    minWidth: '200px',
  },
  title: {
    fontFamily: 'var(--font-display)',
    fontSize: '28px',
    fontWeight: '500',
    color: 'var(--dark)',
    letterSpacing: '-0.3px',
  },
}