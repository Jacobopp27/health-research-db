import { Droplets } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const S = {
  header: {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
    borderTop: '3px solid #C9A227',
    background: 'rgba(255,255,255,0.98)',
    boxShadow: '0 1px 16px rgba(0,0,0,0.09)',
    backdropFilter: 'blur(12px)',
  },
  inner: {
    maxWidth: 1280, margin: '0 auto',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    gap: 16, padding: '13px 24px',
  },
  logoLink: { display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' },
  logoIcon: {
    width: 42, height: 42, borderRadius: '50%',
    background: 'linear-gradient(135deg, #2a7530 0%, #1a4d1f 100%)',
    color: '#fff',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0,
    boxShadow: '0 2px 8px rgba(42,117,48,0.35)',
  },
  siteTitle: {
    fontFamily: '"Lora", Georgia, serif',
    fontSize: 22, fontWeight: 700, lineHeight: 1,
    color: '#1e293b', margin: 0,
    letterSpacing: '-0.3px',
  },
  siteSubtitle: {
    fontFamily: '"Poppins", system-ui, sans-serif',
    fontSize: 10, fontWeight: 600,
    letterSpacing: '0.2em', textTransform: 'uppercase',
    color: '#64748b', marginTop: 4,
  },
  tagline: {
    fontFamily: '"Poppins", system-ui, sans-serif',
    fontSize: 13, color: '#94a3b8',
    fontStyle: 'italic',
  },
}

function Header() {
  const { t } = useTranslation()

  return (
    <header style={S.header}>
      <div style={S.inner}>
        <Link to="/" style={S.logoLink}>
          <div style={S.logoIcon}><Droplets size={18} /></div>
          <div>
            <p style={S.siteTitle}>{t('site.title')}</p>
            <p style={S.siteSubtitle}>{t('site.subtitle')}</p>
          </div>
        </Link>

        <p style={S.tagline}>{t('site.tagline')}</p>
      </div>
    </header>
  )
}

export default Header
