<template>
  <div class="container fullscreen">
    <div
      class="align-items-center flex-column h-100 justify-content-center row"
    >
      <!-- <button @click="setLanguage('ar')">Test</button> -->
      <Button
        @clicked="selectLanguage('ar')"
        class="col-6 mb-4"
        :color="'secondary'"
        >اللغة العربية</Button
      >
      <Button @clicked="selectLanguage('en')" class="col-6">English</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Button from '@/components/iButton.vue'
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  mounted() {
    this.$i18n.setLocale(localStorage.getItem('i18n') || 'en')
  },
  components: {
    Button,
  },
  methods: {
    selectLanguage(lang: string) {
      this.$store.commit('setLanguage', lang)
      this.$i18n.setLocale(lang)
      this.$router.push(`destination`)
    },
  },
})
</script>
