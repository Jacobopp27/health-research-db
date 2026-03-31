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
        gap: 8,
        border: '2px solid #2a7530',
        borderRadius: 999,
        background: hovered ? '#f0faf0' : '#fff',
        boxShadow: '0 4px 16px rgba(0,0,0,0.14)',
        padding: '10px 18px',
        fontSize: 15,
        fontWeight: 700,
        color: '#1a4d1f',
        cursor: 'pointer',
        transition: 'all 0.15s',
        fontFamily: '"Poppins", system-ui, sans-serif',
        transform: hovered ? 'translateY(-2px)' : 'none',
      }}
    >
      <span style={{ fontSize: 20, lineHeight: 1 }}>
        {isSpanish ? '🇺🇸' : '🇪🇸'}
      </span>
      <span style={{ fontSize: 13 }}>
        {isSpanish ? 'EN' : 'ES'}
      </span>
    </button>
  )
}

export default LanguageToggle
