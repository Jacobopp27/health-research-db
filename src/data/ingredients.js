import ganoderma from './ganoderma'
import inulina from './inulina'
import mucilago from './mucilago'
import resveratrol from './resveratrol'
import teNegro from './teNegro'

export const ingredients = [
  ganoderma,
  resveratrol,
  inulina,
  teNegro,
  mucilago,
].map((ingredient) => ({
  ...ingredient,
  studyCount: ingredient.studies.length,
  propertyCount: ingredient.properties.length,
}))

export const ingredientsBySlug = Object.fromEntries(
  ingredients.map((ingredient) => [ingredient.slug, ingredient]),
)

export function getStudyUrl(study) {
  if (study.pmid) {
    return `https://pubmed.ncbi.nlm.nih.gov/${study.pmid}/`
  }

  if (study.doi) {
    return `https://doi.org/${study.doi}`
  }

  return study.url ?? null
}

export function getStudyLabel(study) {
  if (study.pmid) {
    return `PMID ${study.pmid}`
  }

  if (study.doi) {
    return 'DOI'
  }

  return study.sourceLabel ?? 'Source'
}

export {
  ganoderma,
  inulina,
  mucilago,
  resveratrol,
  teNegro,
}