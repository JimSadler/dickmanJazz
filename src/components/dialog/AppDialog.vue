<script setup>
import { ref, computed, watch } from 'vue'
/* istanbul ignore file */
defineProps({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  btnProps: {
    type: Object,
    default: () => ({}),
  },
  showActivator: {
    type: Boolean,
    default: true,
  },
  isScrollable: {
    type: Boolean,
    default: false,
  },
  dialogActionType: {
    type: String,
    required: true,
  },
})

const modelValue = defineModel()

// make sure dialogs always return focus to the top
const content = ref(null)

function onFocusTrapFocus() {
  console.log('onFocusTrapFocus', content)
  const focusable = content.value.querySelector(
    "button, [href], input, select, textarea,i, [tabindex]:not([tabindex='-1'])",
  )
  console.log('focusable', focusable)
  if (focusable) {
    focusable.focus()
  }
}
</script>

<template>
  <v-dialog v-model="modelValue" :id="`${id}-dialog`" :aria-label="title">
    <!-- activator -->
    <template #activator="{ props }" v-if="$slots.activator && showActivator">
      <slot name="activator" :props="props" />
    </template>
    <template #activator="{ props }" v-else-if="showActivator">
      <app-btn v-bind="{ ...props, ...btnProps }" :id="id" />
    </template>

    <!-- dialog -->
    <div ref="content">
      <slot />
    </div>

    <!-- focus trap -->
    <div
      class="focus-trap"
      tabindex="0"
      @focus="onFocusTrapFocus"
      @keydown.esc="() => (modelValue = false)"
      @keydown.tab.prevent
    />
  </v-dialog>
</template>
