import french from './fr'
import english from './en'
import {lang} from './../stories/EditableBoard.story.js'




export const t = (s) => {

  const langMapping = {
    'en': english,
    'fr': french
  }

  return langMapping[lang][s]
}


