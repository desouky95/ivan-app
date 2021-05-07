<template>
  <div class="i-select">
    <div
      :class="{ toggled: menuToggled }"
      @click="menuToggled = !menuToggled"
      class="select-placeholder"
    >
      {{ placeholder }}
    </div>
    <div :class="{ opened: menuToggled }" class="options">
      <div
        @click="emitValue(index)"
        class="option"
        v-for="(item, index) in data"
        :key="item"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from '@nuxtjs/composition-api'

// import Vue, { defineComponent, PropType, ref } from "vue";
export default defineComponent({
  setup() {
    const iData = {
      menuToggled: ref(false),
      placeholder: ref('Select'),
    }
    return iData
  },
  props: {
    value: {
      type: Number,
      default: 0,
    },
    data: {
      type: Array as PropType<Array<string>>,
      default: function () {
        return new Array<string>()
      },
    },
  },
  mounted() {
    if (this.value != undefined) {
      this.placeholder = this.getCurrentValue()
    }
    const menu: HTMLElement | null = this.$el.querySelector('.options')
  },
  emits: ['valueChange'],
  methods: {
    getCurrentValue(item?: any): any {
      if (this.data) {
        return this.data[this.value]
      }
      return 'Select'
    },

    toggleMenu() {
      this.menuToggled = !this.menuToggled
    },
    emitValue(item: number) {
      this.$emit('valueChange', item)
      this.placeholder = this.data[item]
      this.toggleMenu()
    },
  },
})
</script>

<style lang="scss">
.i-select {
  position: relative;
  width: auto;
  font-size: 1.5rem;
  .toggled {
    border-bottom-left-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
  }
  .select-placeholder {
    width: 100%;
    height: 100%;
    background: var(--ivan-primary);
    color: var(--ivan-secondary);
    padding: 0.4rem 2rem;
    border-radius: 0.3rem;
    cursor: pointer;
  }
  .opened {
    display: block !important;
  }
  .options {
    position: absolute;
    width: 100%;
    left: 0;
    top: 100%;
    display: none;
    .option {
      padding: 0.3rem;
      cursor: pointer;
      background: var(--ivan-secondary);
      color: var(--ivan-primary);
      border-bottom: 0.1rem solid transparent;
      transition: all ease-in-out 0.2s;
      &:hover {
        border-color: var(--ivan-primary);
      }
    }
  }
}
</style>
