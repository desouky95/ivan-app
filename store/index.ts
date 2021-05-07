import Vuex from 'vuex'

export default () => {
  return new Vuex.Store({
    state: {
      currentLanguage: 'en',
      destionation: {
        id: 0,
        value: '',
      },
      route: {
        name: '',
        path: [],
      },
    },
    getters: { getAppLocale: (state) => state.currentLanguage },
    mutations: {
      setLanguage(context: any, lang: string) {
        context.currentLanguage = lang
        localStorage.setItem('i18n', lang)
      },
      setDestination(context, des: { id: number; value: string }) {
        context.destionation = des
      },
      setRoute(context, route: any) {
        context.route = route
      },
    },
    modules: {},
  })
}
