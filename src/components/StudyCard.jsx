import { ArrowUpRight, FileText } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { getStudyLabel, getStudyUrl } from '../data/ingredients'

function StudyCard({ study, language }) {
  const { t } = useTranslation()
  const studyUrl = getStudyUrl(study)
  const sourceLabel = getStudyLabel(study)
  const [linkHovered, setLinkHovered] = useState(false)

  return (
    <article
      id={study.id}
      style={{
        background: '#fff',
        border: '1px solid #e2e8f0',
        borderRadius: 8,
        padding: '24px 28px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
        fontFamily: '"Poppins", system-ui, sans-serif',
      }}
    >
      {/* Top row: journal/year badge + link */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8,
            fontSize: 11, fontWeight: 700, letterSpacing: '0.16em',
            textTransform: 'uppercase', color: '#2a7530', marginBottom: 10,
          }}>
            <span>{study.journal}</span>
            <span style={{ color: '#cbd5e1' }}>•</span>
            <span>{study.year}</span>
          </div>
          <h2 style={{
            fontFamily: '"Lora", Georgia, serif',
            fontSize: 20, fontWeight: 700, lineHeight: 1.4,
            color: '#1e293b', margin: 0,
          }}>{study.title}</h2>
        </div>

        {studyUrl && (
          <a
            href={studyUrl}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => setLinkHovered(true)}
            onMouseLeave={() => setLinkHovered(false)}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
            border: '2px solid #2a7530',
            borderRadius: 6,
            background: linkHovered ? '#f0faf0' : '#fff',
            padding: '8px 14px',
            fontSize: 13, fontWeight: 600, color: '#1a4d1f',
              textDecoration: 'none', flexShrink: 0,
              transition: 'background 0.15s',
            }}
          >
            <FileText size={15} />
            <span>
              {study.pmid
                ? t('study.viewPubmed')
                : study.doi ? t('study.viewDoi') : t('study.viewSource')}
            </span>
            <ArrowUpRight size={14} />
          </a>
        )}
      </div>

      {/* Meta row */}
      <div style={{
        display: 'flex', flexWrap: 'wrap', gap: '8px 32px',
        marginTop: 16, fontSize: 13, color: '#64748b',
      }}>
        <span>
          <strong style={{ color: '#334155', fontWeight: 600 }}>{t('study.authors')}: </strong>
          {study.authors.join(', ')}
        </span>
        {study.pmid && (
          <span>
            <strong style={{ color: '#334155', fontWeight: 600 }}>PMID: </strong>
            {study.pmid}
          </span>
        )}
        {!study.pmid && sourceLabel && (
          <span>
            <strong style={{ color: '#334155', fontWeight: 600 }}>{t('study.source')}: </strong>
            {sourceLabel}
          </span>
        )}
      </div>

      {/* Summary box */}
      <div style={{
        marginTop: 16,
        background: '#f8fafc',
        borderRadius: 6,
        padding: '14px 18px',
        borderLeft: '3px solid #2a7530',
      }}>
        <p style={{
          fontSize: 11, fontWeight: 700, letterSpacing: '0.14em',
          textTransform: 'uppercase', color: '#94a3b8', marginBottom: 8,
        }}>{t('study.summary')}</p>
        <p style={{ fontSize: 14, lineHeight: 1.75, color: '#475569' }}>
          {study.summary[language]}
        </p>
      </div>
    </article>
  )
}

export default StudyCard
