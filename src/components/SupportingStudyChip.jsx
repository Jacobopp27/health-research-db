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
        border: `1px solid ${hovered ? '#2a7530' : '#b8e0ba'}`,
        borderRadius: 999,
        background: hovered ? '#fff' : '#f0faf0',
        padding: '5px 14px',
        fontSize: 12, fontWeight: 500,
        color: '#1a4d1f',
        cursor: 'pointer',
        textAlign: 'left',
        transition: 'all 0.15s',
        fontFamily: '"Poppins", system-ui, sans-serif',
        maxWidth: '100%',
        display: 'inline-block',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      }}
      title={study.title}
    >
      {study.year} · {study.authors?.[0] ?? ''} — {study.title}
    </button>
  )
}

export default SupportingStudyChip
