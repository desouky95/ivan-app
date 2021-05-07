<template>
  <div class="container fullscreen p-5">
    <h2 class="text-center">{{ $t('destination') }}</h2>
    <div class="justify-content-center row my-5">
      <div class="col-8">
        <i-select
          @valueChange="submitDestintation"
          :value="0"
          :data="destinations"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import iSelect from '@/components/iSelect.vue'
import { defineComponent } from '@nuxtjs/composition-api/dist'
export default defineComponent({
  components: {
    iSelect,
  },
  data() {
    return {
      destinations: ['Dokki', 'Haram', 'Zayed'],
    }
  },
  methods: {
    submitDestintation(item: any) {
      this.$store.state.destionation.id = item
      this.$store.commit('setDestination', {
        id: item,
        value: this.destinations[item],
      })
      this.$router.push('routes')
    },
  },
})
</script>

<style lang="scss"></style>
