import { ArrowUpRight, BookOpen, FlaskConical, Leaf } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ingredients } from '../data/ingredients'

const totalStudies = ingredients.reduce((t, i) => t + i.studyCount, 0)

function IngredientCard({ ingredient }) {
  const { t } = useTranslation()
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      to={`/ingredient/${ingredient.slug}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 12,
        overflow: 'hidden',
        border: '1px solid',
        borderColor: hovered ? '#b8e0ba' : '#e2e8f0',
        background: '#fff',
        boxShadow: hovered
          ? '0 16px 40px rgba(13,40,24,0.14), 0 2px 8px rgba(0,0,0,0.06)'
          : '0 2px 10px rgba(0,0,0,0.06)',
        transform: hovered ? 'translateY(-4px)' : 'none',
        transition: 'all 0.22s ease',
        textDecoration: 'none',
      }}
    >
      {/* Image */}
      <div style={{
        height: 210,
        backgroundImage: `linear-gradient(180deg, rgba(13,40,24,0.15) 0%, rgba(13,40,24,0.52) 100%), url(${ingredient.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        flexShrink: 0,
      }}>
        {/* Study count badge on image */}
        <div style={{
          position: 'absolute', top: 14, right: 14,
          background: 'rgba(13,40,24,0.72)',
          backdropFilter: 'blur(6px)',
          borderRadius: 999, padding: '4px 12px',
          display: 'flex', alignItems: 'center', gap: 6,
          fontSize: 12, fontWeight: 700, color: '#fff',
        }}>
          <BookOpen size={12} />
          {ingredient.studyCount}
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: '22px 24px', display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
        <div style={{ flex: 1 }}>
          <h3 style={{
            fontFamily: '"Lora", Georgia, serif',
            fontSize: 19, fontWeight: 700, color: '#1e293b', margin: 0, lineHeight: 1.35,
          }}>
            {t(`ingredients.${ingredient.id}.name`)}
          </h3>
          <p style={{ marginTop: 7, fontSize: 13, lineHeight: 1.65, color: '#64748b' }}>
            {t(`ingredients.${ingredient.id}.tagline`)}
          </p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          <span style={{
            background: '#f0faf0', color: '#1a4d1f',
            border: '1px solid #b8e0ba',
            borderRadius: 999, padding: '3px 11px',
            fontSize: 11, fontWeight: 700,
          }}>
            {t('common.studyCount', { count: ingredient.studyCount })}
          </span>
          <span style={{
            background: '#fefce8', color: '#854d0e',
            border: '1px solid #fef08a',
            borderRadius: 999, padding: '3px 11px',
            fontSize: 11, fontWeight: 600,
          }}>
            {t('common.propertyCount', { count: ingredient.propertyCount })}
          </span>
        </div>

        {/* CTA */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          borderTop: '1px solid #f1f5f9',
          paddingTop: 12, marginTop: 2,
          fontSize: 13, fontWeight: 700, color: hovered ? '#1a4d1f' : '#2a7530',
          transition: 'color 0.15s',
        }}>
          <span>{t('home.exploreBtn')}</span>
          <ArrowUpRight
            size={16}
            style={{ transform: hovered ? 'translate(2px,-2px)' : 'none', transition: 'transform 0.18s' }}
          />
        </div>
      </div>
    </Link>
  )
}

function StatBadge({ icon: Icon, value, label, accent }) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.07)',
      border: '1px solid rgba(255,255,255,0.12)',
      borderRadius: 12,
      padding: '18px 22px',
      display: 'flex', flexDirection: 'column', gap: 8,
    }}>
      <Icon size={20} color={accent} strokeWidth={2} />
      <p style={{
        fontFamily: '"Lora", Georgia, serif',
        fontSize: 40, fontWeight: 700, color: '#fff', margin: 0, lineHeight: 1,
      }}>{value}</p>
      <p style={{ fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.65)', margin: 0, letterSpacing: '0.04em' }}>
        {label}
      </p>
    </div>
  )
}

function Home() {
  const { t } = useTranslation()

  return (
    <div style={{ maxWidth: 1280, margin: '0 auto', padding: '32px 24px 80px' }}>

      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #081c10 0%, #1a4d1f 50%, #0d3318 100%)',
        borderRadius: 16,
        padding: '48px 52px',
        boxShadow: '0 12px 44px rgba(8,28,16,0.30)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 40,
        alignItems: 'center',
        marginBottom: 52,
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative circle */}
        <div style={{
          position: 'absolute', top: -60, right: -60,
          width: 280, height: 280, borderRadius: '50%',
          background: 'rgba(201,162,39,0.06)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: -80, left: '40%',
          width: 200, height: 200, borderRadius: '50%',
          background: 'rgba(255,255,255,0.03)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative' }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 7,
            background: 'rgba(201,162,39,0.15)', color: '#e8c547',
            border: '1px solid rgba(201,162,39,0.35)',
            borderRadius: 999, padding: '5px 14px',
            fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase',
          }}>
            <Leaf size={10} />
            {t('home.heroBadge')}
          </span>
          <h1 style={{
            fontFamily: '"Lora", Georgia, serif',
            fontSize: 36, fontWeight: 700, lineHeight: 1.28,
            color: '#fff', margin: '20px 0 16px', maxWidth: 520,
          }}>
            {t('site.subtitle')}
          </h1>
          <p style={{ fontSize: 14.5, lineHeight: 1.8, color: 'rgba(255,255,255,0.72)', maxWidth: 460, margin: 0 }}>
            {t('home.intro')}
          </p>
          <p style={{
            marginTop: 18, fontSize: 11, fontWeight: 700,
            letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C9A227',
            display: 'flex', alignItems: 'center', gap: 6,
          }}>
            <span style={{ width: 24, height: 1, background: '#C9A227', display: 'inline-block' }} />
            {t('site.tagline')}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, position: 'relative' }}>
          <StatBadge icon={Leaf} value="5" label={t('home.naturalIngredients')} accent="#C9A227" />
          <StatBadge icon={FlaskConical} value={totalStudies} label={t('home.scientificStudies')} accent="#86efac" />
        </div>
      </section>

      {/* Grid */}
      <section>
        <div style={{ marginBottom: 28, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
          <div>
            <p style={{
              fontSize: 10, fontWeight: 700, letterSpacing: '0.22em',
              textTransform: 'uppercase', color: '#2a7530', margin: '0 0 6px',
            }}>
              {t('home.featured')}
            </p>
            <h2 style={{
              fontFamily: '"Lora", Georgia, serif',
              fontSize: 28, fontWeight: 700, color: '#0d2818',
              margin: 0,
            }}>{t('site.title')}</h2>
          </div>
          <p style={{ fontSize: 13, color: '#94a3b8', margin: 0 }}>
            {totalStudies} {t('home.scientificStudies').toLowerCase()}
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
          gap: 24,
        }}>
          {ingredients.map((ingredient) => (
            <IngredientCard key={ingredient.id} ingredient={ingredient} />
          ))}
        </div>
      </section>

    </div>
  )
}

export default Home
