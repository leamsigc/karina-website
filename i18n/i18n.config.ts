import globalMessage from './global.json'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'es',
  fallbackLocale: 'es',
  fallbackWarn: false,
  missingWarn: false,
  messages: globalMessage
}))