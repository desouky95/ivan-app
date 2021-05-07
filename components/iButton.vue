<template>
  <button @click="emitValue" class="i-btn"><slot></slot></button>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

enum Colors {
  primary = 'primary',
  secondary = 'secondary',
}

type Color = keyof typeof Colors

export default defineComponent({
  props: {
    color: {
      type: String as () => Color,
      default: Colors.primary,
    },
  },
  emits: ['clicked'],
  methods: {
    emitValue($event: MouseEvent) {
      this.$emit('clicked', $event)
    },
  },
  computed: {
    getButtonColor(): string {
      return `btn-${this.color}`
    },
  },
})
</script>

<style></style>
