export default function ({ store, route }: { store: any; route: any }) {
  // console.log(store)
  if (process.client) {
    store.commit('setLanguage', localStorage.getItem('i18n') || 'en')
    document.documentElement.lang = localStorage.getItem('i18n') || 'en'
  }
  // store.commit('class/SetClass', route.name)
}
