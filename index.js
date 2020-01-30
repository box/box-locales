const boxLanguages = {
    'en-US': {
        id: 4,
        bcp47Tag: 'en-US',
        cldrTag: 'en',
        name: 'English (US)',
        localizedName: 'English (US)',
    },
    'zh-CN': {
        id: 6,
        bcp47Tag: 'zh-CN',
        cldrTag: 'zh-Hans',
        name: 'Chinese (Simplified)',
        localizedName: '简体中文',
    },
    'ru-RU': {
        id: 8,
        bcp47Tag: 'ru-RU',
        cldrTag: 'ru',
        name: 'Russian',
        localizedName: 'Русский',
    },
    'es-ES': {
        id: 10,
        bcp47Tag: 'es-ES',
        cldrTag: 'es',
        name: 'Spanish',
        localizedName: 'Español',
    },
    'pt-BR': {
        id: 14,
        bcp47Tag: 'pt-BR',
        cldrTag: 'pt',
        name: 'Portuguese',
        localizedName: 'Português',
    },
    'it-IT': {
        id: 16,
        bcp47Tag: 'it-IT',
        cldrTag: 'it',
        name: 'Italian',
        localizedName: 'Italiano',
    },
    'de-DE': {
        id: 18,
        bcp47Tag: 'de-DE',
        cldrTag: 'de',
        name: 'German',
        localizedName: 'Deutsch',
    },
    'ja-JP': {
        id: 19,
        bcp47Tag: 'ja-JP',
        cldrTag: 'ja',
        name: 'Japanese',
        localizedName: '日本語',
    },
    'fr-FR': {
        id: 21,
        bcp47Tag: 'fr-FR',
        cldrTag: 'fr',
        name: 'French',
        localizedName: 'Français',
    },
    'nl-NL': {
        id: 24,
        bcp47Tag: 'nl-NL',
        cldrTag: 'nl',
        name: 'Dutch',
        localizedName: 'Nederlands',
    },
    'pl-PL': {
        id: 30,
        bcp47Tag: 'pl-PL',
        cldrTag: 'pl',
        name: 'Polish',
        localizedName: 'Polski',
    },
    'tr-TR': {
        id: 49,
        bcp47Tag: 'tr-TR',
        cldrTag: 'tr',
        name: 'Turkish',
        localizedName: 'Türkçe',
    },
    'ko-KR': {
        id: 55,
        bcp47Tag: 'ko-KR',
        cldrTag: 'ko',
        name: 'Korean',
        localizedName: '한국어',
    },
    'sv-SE': {
        id: 57,
        bcp47Tag: 'sv-SE',
        cldrTag: 'sv',
        name: 'Swedish',
        localizedName: 'Svenska',
    },
    'en-GB': {
        id: 59,
        bcp47Tag: 'en-GB',
        cldrTag: 'en-GB',
        name: 'English (UK)',
        localizedName: 'English (UK)',
    },
    'fi-FI': {
        id: 61,
        bcp47Tag: 'fi-FI',
        cldrTag: 'fi',
        name: 'Finnish',
        localizedName: 'Suomi',
    },
    'zh-TW': {
        id: 63,
        bcp47Tag: 'zh-TW',
        cldrTag: 'zh-Hant',
        name: 'Chinese (Traditional)',
        localizedName: '繁體中文',
    },
    'fr-CA': {
        id: 65,
        bcp47Tag: 'fr-CA',
        cldrTag: 'fr-CA',
        name: 'French (Canada)',
        localizedName: 'Français (Canada)',
    },
    'en-CA': {
        id: 66,
        bcp47Tag: 'en-CA',
        cldrTag: 'en-CA',
        name: 'English (Canada)',
        localizedName: 'English (Canada)',
    },
    'en-AU': {
        id: 67,
        bcp47Tag: 'en-AU',
        cldrTag: 'en-AU',
        name: 'English (Australia)',
        localizedName: 'English (Australia)',
    },
    'da-DK': { 
        id: 68,
        bcp47Tag: 'da-DK',
        cldrTag: 'da',
        name: 'Danish',
        localizedName: 'Dansk',
    },
    'nb-NO': {
        id: 69,
        bcp47Tag: 'nb-NO',
        cldrTag: 'nb',
        name: 'Norwegian (Bokmål)',
        localizedName: 'Norsk (Bokmål)',
    },
    'bn-IN': {
        id: 70,
        bcp47Tag: 'bn-IN',
        cldrTag: 'bn',
        name: 'Bengali',
        localizedName: 'বাংলা',
    },
    'hi-IN': {
        id: 71,
        bcp47Tag: 'hi-IN',
        cldrTag: 'hi',
        name: 'Hindi',
        localizedName: 'हिन्दी',
    },
    'es-419': {
        id: 72,
        bcp47Tag: 'es-419',
        cldrTag: 'es-419',
        name: 'Spanish (Latin America)',
        localizedName: 'Español (Latinoamérica)',
    },
    'en-x-pseudo': {
        id: 0,
        bcp47Tag: 'en-x-pseudo',
        cldrTag: 'en',
        name: 'Pseudo Locale',
        localizedName: 'Pseudo Locale',
    }
};

module.exports = Object.keys(boxLanguages);
module.exports.boxLanguages = boxLanguages;
