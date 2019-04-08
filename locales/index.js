import french from './fr'
import english from './en'


export const t = (s) => {

  const langMapping = {
    'en': english,
    'fr': french
  }

  const lang = 'fr'

  return langMapping[lang][s]
}


