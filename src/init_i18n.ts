import i18n from 'i18next';
import React from './translation/React.json'
import React_en from './translation/React.en.json'
import { initReactI18next } from 'react-i18next';

i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    // .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: false,
        fallbackLng: "ro",
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            en: {
                translation: {
                    React: React_en,
                },
            },
            ro: {
                translation: {
                    React: React,
                },
            },
        },
    });

export default i18n;