import { ChevronLeft } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import IngredientTabs from '../components/IngredientTabs'
import PropertyCard from '../components/PropertyCard'
import StudyCard from '../components/StudyCard'
import { ingredientsBySlug } from '../data/ingredients'

function IngredientPage() {
  const { slug } = useParams()
  const { t, i18n } = useTranslation()
  const [searchParams, setSearchParams] = useSearchParams()
  const ingredient = ingredientsBySlug[slug]
  const activeTab = searchParams.get('tab') === 'properties' ? 'properties' : 'studies'
  const [backHovered, setBackHovered] = useState(false)

  const studiesById = useMemo(() => {
    if (!ingredient) return {}
    return Object.fromEntries(ingredient.studies.map((s) => [s.id, s]))
  }, [ingredient])

  function handleTabChange(tab) {
    setSearchParams(tab === 'studies' ? {} : { tab })
  }

  function handleOpenStudy(studyId) {
    handleTabChange('studies')
    window.requestAnimationFrame(() => {
      document.getElementById(studyId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  if (!ingredient) {
    return (
      <div style={{ maxWidth: 800, margin: '80px auto', textAlign: 'center', padding: '0 24px' }}>
        <p style={{ fontSize: 28, fontFamily: '"Lora", Georgia, serif', color: '#1e293b' }}>
          {t('common.notFound')}
        </p>
        <Link to="/" style={{
          display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 24,
          border: '2px solid #2EA3F2', borderRadius: 6, padding: '10px 18px',
          fontWeight: 600, color: '#1570b0', textDecoration: 'none',
        }}>
          <ChevronLeft size={16} />{t('nav.back')}
        </Link>
      </div>
    )
  }

  const lang = i18n.language === 'es' ? 'es' : 'en'

  return (
    <div style={{ paddingBottom: 64 }}>

      {/* Hero banner */}
      <section style={{
        backgroundImage: `linear-gradient(rgba(13,40,24,0.72), rgba(8,28,16,0.80)), url(${ingredient.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '56px 24px',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <Link
            to="/"
            onMouseEnter={() => setBackHovered(true)}
            onMouseLeave={() => setBackHovered(false)}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              fontSize: 13, fontWeight: 600,
              color: backHovered ? '#fff' : 'rgba(255,255,255,0.82)',
              textDecoration: 'none', transition: 'color 0.15s',
            }}
          >
            <ChevronLeft size={16} />
            {t('nav.back')}
          </Link>

          <div style={{ marginTop: 28, maxWidth: 680 }}>
            <p style={{
              fontSize: 12, fontWeight: 700, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: '#C9A227', margin: '0 0 12px',
            }}>
              {t(`ingredients.${ingredient.id}.tagline`)}
            </p>
            <h1 style={{
              fontFamily: '"Lora", Georgia, serif',
              fontSize: 42, fontWeight: 700, lineHeight: 1.2,
              color: '#fff', margin: 0,
            }}>
              {t(`ingredients.${ingredient.id}.name`)}
            </h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 20 }}>
              {[t('common.studyCount', { count: ingredient.studyCount }),
                t('common.propertyCount', { count: ingredient.propertyCount })].map((label) => (
                <span key={label} style={{
                background: 'rgba(42,117,48,0.55)',
                  backdropFilter: 'blur(4px)',
                  borderRadius: 999, padding: '5px 16px',
                  fontSize: 13, fontWeight: 600, color: '#fff',
                }}>{label}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '32px 24px 0' }}>
        <IngredientTabs
          activeTab={activeTab}
          onChange={handleTabChange}
          studiesCount={ingredient.studyCount}
          propertiesCount={ingredient.propertyCount}
        />

        <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 20 }}>
          {activeTab === 'studies'
            ? ingredient.studies.map((study) => (
                <StudyCard key={study.id} study={study} language={lang} />
              ))
            : ingredient.properties.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  studies={property.studyIds.map((id) => studiesById[id]).filter(Boolean)}
                  onOpenStudy={handleOpenStudy}
                />
              ))}
        </div>
      </section>
    </div>
  )
}

export default IngredientPage
