<template>
  <div class="fullscreen p-5">
    <h2 class="text-center">{{ $t('routes') }}</h2>
    <div
      :style="{
        gridTemplateColumns: `repeat(${routesOptions.length},1fr)`,
      }"
      class="justify-content-center d-grid row my-5 routes"
    >
      <ul
        @click="selectRoute(route)"
        v-for="route of routesOptions"
        :key="route"
      >
        <li>{{ route.name }}</li>
        <li v-for="path in route.path" :key="path">{{ path }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api/dist'

export default defineComponent({
  data() {
    return {
      routesOptions: [
        { name: 'Route 1', path: ['Street1', 'Street2', 'Street3'] },
        { name: 'Route 2', path: ['Street1', 'Street2', 'Street3'] },
        { name: 'Route 3', path: ['Street1', 'Street2', 'Street3'] },
      ],
      routesLength: 3,
    }
  },
  methods: {
    selectRoute(route: any) {
      this.$store.commit('setRoute', route)
      this.$router.push(`checkout`)
    },
  },
})
</script>

<style lang="scss">
.routes {
  grid-template-columns: repeat(3, 1fr);
  column-gap: 0.5rem;
}
ul {
  margin: 0 !important;
  padding: 0 !important;
  list-style: none;
  background: var(--ivan-secondary);
  cursor: pointer;
  transition: all ease-in-out 0.1s;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 1rem 0.2rem var(--ivan-shadow);
  }
  li {
    &:first-child {
      background: var(--ivan-primary);
      color: #fff;
      padding: 0.5rem;
    }
    padding: 1rem 0.3rem;
  }
}
</style>
