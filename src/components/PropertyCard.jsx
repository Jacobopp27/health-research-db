import { useTranslation } from 'react-i18next'
import SupportingStudyChip from './SupportingStudyChip'

function PropertyCard({ property, studies, onOpenStudy }) {
  const { t } = useTranslation()

  return (
    <article style={{
      background: '#fff',
      border: '1px solid #e2e8f0',
      borderRadius: 8,
      padding: '24px 28px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
      fontFamily: '"Poppins", system-ui, sans-serif',
    }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <h2 style={{
            fontFamily: '"Lora", Georgia, serif',
            fontSize: 22, fontWeight: 700, color: '#1e293b', margin: 0,
          }}>
            {t(`properties.${property.key}.label`)}
          </h2>
          <p style={{ marginTop: 10, fontSize: 14, lineHeight: 1.75, color: '#475569', maxWidth: 720 }}>
            {t(`properties.${property.key}.description`)}
          </p>
        </div>
        <span style={{
          background: '#2a7530', color: '#fff',
          borderRadius: 999, padding: '4px 14px',
          fontSize: 12, fontWeight: 700, flexShrink: 0, alignSelf: 'flex-start',
          whiteSpace: 'nowrap',
        }}>
          {t('property.supportedBy', { count: studies.length })}
        </span>
      </div>

      <div style={{ marginTop: 16, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {studies.map((study) => (
          <SupportingStudyChip
            key={study.id}
            study={study}
            onOpenStudy={onOpenStudy}
          />
        ))}
      </div>
    </article>
  )
}

export default PropertyCard
