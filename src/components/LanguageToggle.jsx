import { Globe } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

function LanguageToggle() {
  const { i18n } = useTranslation()
  const isSpanish = i18n.language === 'es'
  const [hovered, setHovered] = useState(false)

  return (
    <button
      type="button"
      onClick={() => i18n.changeLanguage(isSpanish ? 'en' : 'es')}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      title={isSpanish ? 'Switch to English' : 'Cambiar a Español'}
      style={{
        position: 'fixed',
        bottom: 28,
        right: 28,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        gap: 7,
        border: '2px solid',
        borderColor: hovered ? '#1a4d1f' : '#2a7530',
        borderRadius: 999,
        background: hovered ? '#2a7530' : '#fff',
        boxShadow: hovered
          ? '0 6px 20px rgba(42,117,48,0.35)'
          : '0 3px 14px rgba(0,0,0,0.13)',
        padding: '9px 16px',
        fontSize: 13,
        fontWeight: 700,
        color: hovered ? '#fff' : '#1a4d1f',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        fontFamily: '"Poppins", system-ui, sans-serif',
        transform: hovered ? 'translateY(-2px)' : 'none',
        letterSpacing: '0.06em',
      }}
    >
      <Globe size={15} strokeWidth={2.2} />
      <span>{isSpanish ? 'EN' : 'ES'}</span>
    </button>
  )
}

export default LanguageToggle
