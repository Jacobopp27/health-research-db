import { Leaf } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageToggle from './LanguageToggle'

const S = {
  header: {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
    borderTop: '4px solid #C9A227',
    background: 'rgba(255,255,255,0.97)',
    boxShadow: '0 1px 12px rgba(0,0,0,0.08)',
    backdropFilter: 'blur(8px)',
  },
  inner: {
    maxWidth: 1280, margin: '0 auto',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    gap: 16, padding: '14px 24px',
  },
  logoLink: { display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' },
  logoIcon: {
    width: 44, height: 44, borderRadius: '50%',
    background: '#f0faf0', color: '#2a7530',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0, boxShadow: '0 1px 4px rgba(46,163,242,0.18)',
  },
  siteTitle: {
    fontFamily: '"Lora", Georgia, serif',
    fontSize: 24, fontWeight: 700, lineHeight: 1,
    color: '#1e293b', margin: 0,
  },
  siteSubtitle: {
    fontFamily: '"Poppins", system-ui, sans-serif',
    fontSize: 11, fontWeight: 600,
    letterSpacing: '0.18em', textTransform: 'uppercase',
    color: '#2a7530', marginTop: 3,
  },
  tagline: {
    fontFamily: '"Poppins", system-ui, sans-serif',
    fontSize: 13, color: '#64748b', textAlign: 'right',
  },
}

function Header() {
  const { t } = useTranslation()

  return (
    <header style={S.header}>
      <div style={S.inner}>
        <Link to="/" style={S.logoLink}>
          <div style={S.logoIcon}><Leaf size={20} /></div>
          <div>
            <p style={S.siteTitle}>{t('site.title')}</p>
            <p style={S.siteSubtitle}>{t('site.subtitle')}</p>
          </div>
        </Link>

        <p style={{ ...S.tagline, display: 'none' }} className="lg-tagline">{t('site.tagline')}</p>

        <LanguageToggle />
      </div>
    </header>
  )
}

export default Header
