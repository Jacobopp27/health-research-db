import { ArrowUpRight, Database, FlaskConical } from 'lucide-react'
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
        display: 'block',
        borderRadius: 10,
        overflow: 'hidden',
        border: '1px solid #e2e8f0',
        background: '#fff',
        boxShadow: hovered ? '0 12px 32px rgba(15,23,42,0.15)' : '0 2px 8px rgba(0,0,0,0.07)',
        transform: hovered ? 'translateY(-3px)' : 'none',
        transition: 'all 0.2s ease',
        textDecoration: 'none',
      }}
    >
      {/* Image */}
      <div style={{
        height: 200,
        backgroundImage: `linear-gradient(rgba(15,23,42,0.25), rgba(15,23,42,0.40)), url(${ingredient.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }} />

      {/* Body */}
      <div style={{ padding: '20px 22px', display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div>
          <h3 style={{
            fontFamily: '"Lora", Georgia, serif',
            fontSize: 20, fontWeight: 700, color: '#1e293b', margin: 0, lineHeight: 1.3,
          }}>
            {t(`ingredients.${ingredient.id}.name`)}
          </h3>
          <p style={{ marginTop: 6, fontSize: 13, lineHeight: 1.6, color: '#64748b' }}>
            {t(`ingredients.${ingredient.id}.tagline`)}
          </p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          <span style={{
            background: '#f0faf0', color: '#1a4d1f',
            borderRadius: 999, padding: '3px 12px',
            fontSize: 12, fontWeight: 700,
          }}>
            {t('common.studyCount', { count: ingredient.studyCount })}
          </span>
          <span style={{
            background: '#f1f5f9', color: '#475569',
            borderRadius: 999, padding: '3px 12px',
            fontSize: 12, fontWeight: 600,
          }}>
            {t('common.propertyCount', { count: ingredient.propertyCount })}
          </span>
        </div>

        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          fontSize: 13, fontWeight: 700, color: '#2a7530',
        }}>
          {t('home.exploreBtn')}
          <ArrowUpRight size={15} style={{ transform: hovered ? 'translate(2px,-2px)' : 'none', transition: 'transform 0.15s' }} />
        </div>
      </div>
    </Link>
  )
}

function StatCard({ icon: Icon, value, label }) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.08)',
      border: '1px solid rgba(255,255,255,0.14)',
      borderRadius: 10,
      padding: '20px 22px', display: 'flex', flexDirection: 'column', gap: 10,
    }}>
      <Icon size={22} color="#C9A227" />
      <p style={{
        fontFamily: '"Lora", Georgia, serif',
        fontSize: 36, fontWeight: 700, color: '#fff', margin: 0,
      }}>{value}</p>
      <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', margin: 0 }}>{label}</p>
    </div>
  )
}

function Home() {
  const { t } = useTranslation()

  return (
    <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px 64px' }}>

      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #0d2818 0%, #1a4d1f 60%, #0d2818 100%)',
        borderRadius: 14,
        padding: '40px 44px',
        boxShadow: '0 10px 36px rgba(13,40,24,0.25)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: 32,
        alignItems: 'center',
        marginBottom: 48,
      }}>
        <div>
          <span style={{
            display: 'inline-block',
            background: 'rgba(201,162,39,0.18)', color: '#C9A227',
            border: '1px solid rgba(201,162,39,0.4)',
            borderRadius: 999, padding: '4px 14px',
            fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase',
          }}>
            {t('home.heroBadge')}
          </span>
          <h1 style={{
            fontFamily: '"Lora", Georgia, serif',
            fontSize: 38, fontWeight: 700, lineHeight: 1.25,
            color: '#fff', margin: '18px 0 14px', maxWidth: 540,
          }}>
            {t('site.subtitle')}
          </h1>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: 'rgba(255,255,255,0.78)', maxWidth: 480, margin: 0 }}>
            {t('home.intro')}
          </p>
          <p style={{
            marginTop: 12, fontSize: 12, fontWeight: 600,
            letterSpacing: '0.16em', textTransform: 'uppercase', color: '#C9A227',
          }}>
            {t('site.tagline')}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
          <StatCard icon={Database} value="5" label={t('home.naturalIngredients')} />
          <StatCard icon={FlaskConical} value={totalStudies} label={t('home.scientificStudies')} />
        </div>
      </section>

      {/* Grid */}
      <section>
        <div style={{ marginBottom: 24 }}>
          <p style={{
            fontSize: 11, fontWeight: 700, letterSpacing: '0.18em',
          textTransform: 'uppercase', color: '#2a7530', margin: 0,
          }}>
            {t('home.featured')}
          </p>
          <h2 style={{
            fontFamily: '"Lora", Georgia, serif',
            fontSize: 30, fontWeight: 700, color: '#0d2818',
            margin: '8px 0 0',
          }}>{t('site.title')}</h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 22,
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
