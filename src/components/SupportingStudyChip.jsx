import { ExternalLink } from 'lucide-react'
import { useState } from 'react'

function SupportingStudyChip({ study, onOpenStudy }) {
  const [hovered, setHovered] = useState(false)

  return (
    <button
      type="button"
      onClick={() => onOpenStudy(study.id)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: '1px solid',
        borderColor: hovered ? '#2a7530' : '#c7e4c8',
        borderRadius: 8,
        background: hovered ? '#f0faf0' : '#f8fffe',
        padding: '6px 13px',
        fontSize: 12, fontWeight: 500,
        color: hovered ? '#1a4d1f' : '#2a7530',
        cursor: 'pointer',
        textAlign: 'left',
        transition: 'all 0.15s',
        fontFamily: '"Poppins", system-ui, sans-serif',
        maxWidth: 320,
        display: 'inline-flex', alignItems: 'center', gap: 7,
        overflow: 'hidden',
        boxShadow: hovered ? '0 2px 8px rgba(42,117,48,0.12)' : 'none',
      }}
      title={study.title}
    >
      <span style={{
        fontSize: 10, fontWeight: 800, color: '#94a3b8',
        letterSpacing: '0.06em', flexShrink: 0,
      }}>{study.year}</span>
      <span style={{
        overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1,
      }}>
        {study.authors?.[0] ?? ''} — {study.title}
      </span>
      <ExternalLink size={11} style={{ flexShrink: 0, opacity: hovered ? 1 : 0.5 }} />
    </button>
  )
}

export default SupportingStudyChip
