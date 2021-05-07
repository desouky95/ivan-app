export default function ({ app }: { app: any }) {
  // beforeLanguageSwitch called right before setting a new locale
  app.i18n.onBeforeLanguageSwitch = (
    oldLocale: any,
    newLocale: any,
    isInitialSetup: any,
    context: any
  ) => {
    console.log(newLocale)
    document.documentElement.lang = newLocale
  }
  // onLanguageSwitched called right after a new locale has been set
  app.i18n.onLanguageSwitched = (oldLocale: any, newLocale: any) => {
    // console.log(oldLocale, newLocale)
    // if (newLocale == 'ar') {
    //   document.documentElement.style.direction = 'rtl'
    // } else {
    //   document.documentElement.style.direction = 'ltr'
    // }
  }
}
