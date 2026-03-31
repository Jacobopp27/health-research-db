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
        border: '1px solid #e8edf2',
        borderRadius: 10,
        padding: '26px 30px',
        boxShadow: '0 1px 6px rgba(0,0,0,0.06)',
        fontFamily: '"Poppins", system-ui, sans-serif',
        borderLeft: '4px solid #2a7530',
      }}
    >
      {/* Top row: journal/year badge + link */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: 14 }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            <span style={{
              background: '#f0faf0', color: '#1a4d1f',
              border: '1px solid #b8e0ba',
              borderRadius: 999, padding: '3px 12px',
              fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
            }}>{study.journal}</span>
            <span style={{
              background: '#fefce8', color: '#854d0e',
              border: '1px solid #fef08a',
              borderRadius: 999, padding: '3px 10px',
              fontSize: 11, fontWeight: 700,
            }}>{study.year}</span>
          </div>
          <h2 style={{
            fontFamily: '"Lora", Georgia, serif',
            fontSize: 19, fontWeight: 700, lineHeight: 1.42,
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
              border: '2px solid',
              borderColor: linkHovered ? '#1a4d1f' : '#2a7530',
              borderRadius: 8,
              background: linkHovered ? '#2a7530' : '#fff',
              padding: '8px 14px',
              fontSize: 12, fontWeight: 700,
              color: linkHovered ? '#fff' : '#1a4d1f',
              textDecoration: 'none', flexShrink: 0,
              transition: 'all 0.18s',
            }}
          >
            <FileText size={14} />
            <span>
              {study.pmid
                ? t('study.viewPubmed')
                : study.doi ? t('study.viewDoi') : t('study.viewSource')}
            </span>
            <ArrowUpRight size={13} />
          </a>
        )}
      </div>

      {/* Meta row */}
      <div style={{
        display: 'flex', flexWrap: 'wrap', gap: '6px 28px',
        marginTop: 14, paddingTop: 14,
        borderTop: '1px solid #f1f5f9',
        fontSize: 12, color: '#64748b',
      }}>
        <span>
          <strong style={{ color: '#475569', fontWeight: 600 }}>{t('study.authors')}: </strong>
          {study.authors.join(', ')}
        </span>
        {study.pmid && (
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 4,
            background: '#f8fafc', borderRadius: 4, padding: '2px 8px',
            border: '1px solid #e2e8f0',
          }}>
            <strong style={{ color: '#475569', fontWeight: 600 }}>PMID: </strong>
            {study.pmid}
          </span>
        )}
        {!study.pmid && sourceLabel && (
          <span>
            <strong style={{ color: '#475569', fontWeight: 600 }}>{t('study.source')}: </strong>
            {sourceLabel}
          </span>
        )}
      </div>

      {/* Summary box */}
      <div style={{
        marginTop: 16,
        background: 'linear-gradient(135deg, #f8fffe 0%, #f0faf2 100%)',
        borderRadius: 8,
        padding: '14px 18px',
        border: '1px solid #dcf0dc',
      }}>
        <p style={{
          fontSize: 10, fontWeight: 700, letterSpacing: '0.18em',
          textTransform: 'uppercase', color: '#94a3b8', marginBottom: 8,
          display: 'flex', alignItems: 'center', gap: 6,
        }}>
          <span style={{ width: 14, height: 1.5, background: '#2a7530', borderRadius: 1, display: 'inline-block' }} />
          {t('study.summary')}
        </p>
        <p style={{ fontSize: 14, lineHeight: 1.78, color: '#475569', margin: 0 }}>
          {study.summary[language]}
        </p>
      </div>
    </article>
  )
}

export default StudyCard
