import React, { ReactElement, ReactNode } from 'react';
import { IntlProvider } from 'react-intl';
import { SupportedLanguages } from '../SupportedLanguages';
import { WebExtensionMessage } from '../WebExtensionMessage';
import { Translations } from '../texts/Translations';

/**
 * Wrapper component enabling the 'intl' library to exchange
 * texts with their translations while rendering.
 */

const LANGUAGE_LOCALSTORAGE_KEY = 'lang';

const getLangState = (): SupportedLanguages => {
    const lang = localStorage.getItem(LANGUAGE_LOCALSTORAGE_KEY);
    if (lang) {
        return lang as SupportedLanguages;
    } else {
        return SupportedLanguages.hu;
    }
};

export interface TranslationContext {
    langState: SupportedLanguages;
    updateLangState: (language: SupportedLanguages) => void;
}

const initState: TranslationContext = {
    langState: SupportedLanguages.hu,
    updateLangState: () => {},
};

const eventContext = React.createContext<TranslationContext>(initState);

export function TranslationProvider(props: { children: ReactNode }): ReactElement {
    const [langState, setLangState] = React.useState<SupportedLanguages>(getLangState());
    const translations = Translations;
    const translationsForLocale = translations[langState];
    const messagesForLocale = mapWebExtensionMessages(translationsForLocale);

    const updateLangState = (language: SupportedLanguages) => {
        setLangState(language);
        localStorage.setItem(LANGUAGE_LOCALSTORAGE_KEY, language);
    };

    return (
        <eventContext.Provider value={{ langState, updateLangState }}>
            <IntlProvider locale={langState} messages={messagesForLocale}>
                {props.children}
            </IntlProvider>
        </eventContext.Provider>
    );
}

export function useTranslationContext() {
    return React.useContext(eventContext);
}

/**
 * Takes an object with string keys and values of @type WebExtensionMessage and
 * transforms it to record of strings, which the i18n provider can understand.
 */
function mapWebExtensionMessages(messages: { [key: string]: WebExtensionMessage }): Record<string, string> {
    const result: Record<string, string> = {};
    Object.keys(messages).forEach((key) => {
        result[key] = messages[key].message;
    });
    return result;
}
