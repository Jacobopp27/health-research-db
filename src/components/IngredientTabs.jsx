import { BookOpen, FlaskConical } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const TABS = [
  { id: 'studies', icon: BookOpen },
  { id: 'properties', icon: FlaskConical },
]

function TabButton({ id, Icon, label, count, isActive, onClick }) {
  const [hovered, setHovered] = useState(false)
  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        border: isActive ? '2px solid #2a7530' : '2px solid #e2e8f0',
        borderRadius: 8,
        background: isActive ? '#f0faf0' : (hovered ? '#f8fafc' : '#fff'),
        padding: '9px 18px',
        fontSize: 14, fontWeight: 600,
        color: isActive ? '#1a4d1f' : (hovered ? '#2a7530' : '#475569'),
        cursor: 'pointer',
        transition: 'all 0.15s',
        fontFamily: '"Poppins", system-ui, sans-serif',
      }}
    >
      <Icon size={16} />
      <span>{label}</span>
      <span style={{
        background: '#2a7530', color: '#fff',
        borderRadius: 999, padding: '1px 9px', fontSize: 12, fontWeight: 700,
      }}>{count}</span>
    </button>
  )
}

function IngredientTabs({ activeTab, onChange, studiesCount, propertiesCount }) {
  const { t } = useTranslation()

  return (
    <div style={{
      display: 'flex', flexWrap: 'wrap', gap: 12,
      borderBottom: '2px solid #dcf0dc', paddingBottom: 16, marginBottom: 8,
    }}>
      {TABS.map((tab) => (
        <TabButton
          key={tab.id}
          id={tab.id}
          Icon={tab.icon}
          label={t(`tabs.${tab.id}`)}
          count={tab.id === 'studies' ? studiesCount : propertiesCount}
          isActive={tab.id === activeTab}
          onClick={() => onChange(tab.id)}
        />
      ))}
    </div>
  )
}

export default IngredientTabs
