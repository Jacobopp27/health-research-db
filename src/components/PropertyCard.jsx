import { CheckCircle2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import SupportingStudyChip from './SupportingStudyChip'

function PropertyCard({ property, studies, onOpenStudy }) {
  const { t } = useTranslation()

  return (
    <article style={{
      background: '#fff',
      border: '1px solid #e8edf2',
      borderRadius: 10,
      padding: '24px 28px',
      boxShadow: '0 1px 6px rgba(0,0,0,0.06)',
      fontFamily: '"Poppins", system-ui, sans-serif',
    }}>
      {/* Badge — siempre arriba, no compite con el título */}
      <div style={{ marginBottom: 14 }}>
        <span style={{
          display: 'inline-flex',
          background: 'linear-gradient(135deg, #2a7530, #1a4d1f)',
          color: '#fff',
          borderRadius: 999, padding: '4px 13px',
          fontSize: 11, fontWeight: 700,
          whiteSpace: 'nowrap',
          boxShadow: '0 2px 6px rgba(42,117,48,0.3)',
          letterSpacing: '0.04em',
        }}>
          {t('property.supportedBy', { count: studies.length })}
        </span>
      </div>

      {/* Título + descripción */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
        <div style={{
          width: 40, height: 40, borderRadius: '50%', flexShrink: 0,
          background: 'linear-gradient(135deg, #f0faf0, #dcf0dc)',
          border: '1px solid #b8e0ba',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginTop: 2,
        }}>
          <CheckCircle2 size={18} color="#2a7530" strokeWidth={2.2} />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <h2 style={{
            fontFamily: '"Lora", Georgia, serif',
            fontSize: 21, fontWeight: 700, color: '#1e293b', margin: 0,
          }}>
            {t(`properties.${property.key}.label`)}
          </h2>
          <p style={{ marginTop: 8, fontSize: 13.5, lineHeight: 1.75, color: '#475569' }}>
            {t(`properties.${property.key}.description`)}
          </p>
        </div>
      </div>

      <div style={{
        marginTop: 18, paddingTop: 16, borderTop: '1px solid #f1f5f9',
        display: 'flex', flexWrap: 'wrap', gap: 8,
      }}>
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
