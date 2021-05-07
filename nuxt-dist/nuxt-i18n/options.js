

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
}
export const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {"fallbackLocale":"en","messages":{"en":{"destination":"Enter Destination","routes":"Routes","tripInfo":{"name":"Trip Info.","id":"#ID","destination":"Destination Stop","route":"Route Name","confirm":"Confirm"}},"ar":{"destination":"ادخل الوجهة","routes":"الطرق","tripInfo":{"name":"تفاصيل الرحلة","id":"#ID","destination":"الوجهة","route":"الطريق","confirm":"تأكيد"}}}},
  vueI18nLoader: false,
  locales: [{"code":"en","dir":"ltr"},{"code":"ar","dir":"rtl"}],
  defaultLocale: "en",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  strategy: "prefix",
  lazy: false,
  langDir: null,
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":true,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","onlyOnNoPrefix":false,"onlyOnRoot":false,"useCookie":true},
  differentDomains: false,
  seo: false,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncLocale":false,"syncMessages":false,"syncRouteParams":true},
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  beforeLanguageSwitch: () => null,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  normalizedLocales: [{"code":"en","dir":"ltr"},{"code":"ar","dir":"rtl"}],
  localeCodes: ["en","ar"],
}
