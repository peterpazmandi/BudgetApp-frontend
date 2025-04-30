import * as deAuth from './de/i18nTextsAuth.json'
import * as enAuth from './en/i18nTextsAuth.json'
import * as huAuth from './hu/i18nTextsAuth.json'
/**
 * A single object containing all translation texts.
 * This is required by the TranslationProvider to pass
 * these texts to the 'intl' library.
 */
export const Translations = {
    de: {
        ...deAuth,
    },
    en: {
        ...enAuth,
    },
    hu: {
        ...huAuth,
    },
};
