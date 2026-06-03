const cols = [
  {
    heading: 'Company',
    links: ['Home', 'Studio', 'Service', 'Blog'],
  },
  {
    heading: 'Terms & Policies',
    links: ['Privacy Policy', 'Terms & Conditions', 'License', 'Accesibility'],
  },
  {
    heading: 'Follow Us',
    links: ['Instagram', 'LinkedIn', 'YouTube', 'Twitter'],
  },
  {
    heading: 'Terms & Policies',
    links: ['1898a Flulor ok, STE 20 Drago IL 43867', '(123) 456-789-000', 'info@elementum.com'],
    isContact: true,
  },
]

export default function Footer() {
  return (
    <footer style={s.footer}>
      <div style={s.top}>
        {cols.map((col, i) => (
          <div key={i} style={s.col}>
            <h4 style={s.colHeading}>{col.heading}</h4>
            <ul style={s.list}>
              {col.links.map((l, j) => (
                <li key={j}>
                  <a
                    href="#"
                    style={col.isContact ? s.contactItem : s.link}
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={s.bottom}>
        <p style={s.copy}>©2021 Elementum. All rights reserved.</p>
      </div>

      <style>{`
        footer a:hover { opacity: 0.6; transition: opacity 0.2s; }
        @media (max-width: 768px) {
          .footer-top { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .footer-top { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}

const s = {
  footer: {
    background: 'var(--white)',
    borderTop: '1px solid rgba(0,0,0,0.08)',
  },
  top: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '60px 24px 40px',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '40px',
  },
  col: {},
  colHeading: {
    fontSize: '14px',
    fontWeight: '600',
    color: 'var(--dark)',
    marginBottom: '20px',
    fontFamily: 'var(--font-body)',
    letterSpacing: '0.2px',
  },
  list: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  link: {
    fontSize: '13px',
    color: 'var(--gray)',
    fontWeight: '300',
    transition: 'opacity 0.2s',
  },
  contactItem: {
    fontSize: '12px',
    color: 'var(--gray)',
    fontWeight: '300',
    lineHeight: '1.5',
    display: 'block',
  },
  bottom: {
    borderTop: '1px solid rgba(0,0,0,0.08)',
    padding: '20px 24px',
    textAlign: 'center',
  },
  copy: {
    fontSize: '12px',
    color: '#aaa',
    fontWeight: '300',
  },
}