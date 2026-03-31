import { BookOpen, ChevronLeft, FlaskConical } from 'lucide-react'
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
          border: '2px solid #2a7530', borderRadius: 8, padding: '10px 18px',
          fontWeight: 600, color: '#1a4d1f', textDecoration: 'none',
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
        backgroundImage: `linear-gradient(180deg, rgba(8,28,16,0.55) 0%, rgba(8,28,16,0.85) 100%), url(${ingredient.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '52px 24px 44px',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <Link
            to="/"
            onMouseEnter={() => setBackHovered(true)}
            onMouseLeave={() => setBackHovered(false)}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              fontSize: 12, fontWeight: 600, letterSpacing: '0.04em',
              color: backHovered ? '#fff' : 'rgba(255,255,255,0.7)',
              textDecoration: 'none', transition: 'color 0.15s',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 999, padding: '6px 14px',
            }}
          >
            <ChevronLeft size={14} />
            {t('nav.back')}
          </Link>

          <div style={{ marginTop: 32, maxWidth: 700 }}>
            <p style={{
              fontSize: 11, fontWeight: 700, letterSpacing: '0.22em',
              textTransform: 'uppercase', color: '#e8c547', margin: '0 0 14px',
              display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <span style={{ width: 20, height: 1, background: '#C9A227', display: 'inline-block' }} />
              {t(`ingredients.${ingredient.id}.tagline`)}
            </p>
            <h1 style={{
              fontFamily: '"Lora", Georgia, serif',
              fontSize: 40, fontWeight: 700, lineHeight: 1.22,
              color: '#fff', margin: 0,
              textShadow: '0 2px 12px rgba(0,0,0,0.3)',
            }}>
              {t(`ingredients.${ingredient.id}.name`)}
            </h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 22 }}>
              <span style={{
                background: 'rgba(42,117,48,0.50)',
                backdropFilter: 'blur(6px)',
                border: '1px solid rgba(134,239,172,0.3)',
                borderRadius: 999, padding: '5px 16px',
                fontSize: 12, fontWeight: 700, color: '#fff',
                display: 'flex', alignItems: 'center', gap: 6,
              }}>
                <BookOpen size={13} />
                {t('common.studyCount', { count: ingredient.studyCount })}
              </span>
              <span style={{
                background: 'rgba(201,162,39,0.22)',
                backdropFilter: 'blur(6px)',
                border: '1px solid rgba(201,162,39,0.35)',
                borderRadius: 999, padding: '5px 16px',
                fontSize: 12, fontWeight: 700, color: '#e8c547',
                display: 'flex', alignItems: 'center', gap: 6,
              }}>
                <FlaskConical size={13} />
                {t('common.propertyCount', { count: ingredient.propertyCount })}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '36px 24px 0' }}>
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
