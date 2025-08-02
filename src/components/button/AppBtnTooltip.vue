<script setup>
//istanbul ignore file
import { id } from 'vuetify/locale'
import { ref, defineProps, defineEmits, defineExpose } from 'vue'

defineProps({
  id: {
    type: String,
    required: true,
  },
  tooltip: {
    type: String,
  },
  tooltipIcon: {
    type: String,
  },
  tooltipProps: {
    type: Object,
    default: () => ({}),
  },
  btnProps: {
    type: Object,
    default: () => ({}),
  },
  iconSize: {
    type: [String, Number],
  },
  label: {
    type: String,
  },
})
const emit = defineEmits(['open'])
const tooltipOpen = ref(false)

// istanbul ignore next
function focus() {
  document.getElementById(`${props.id}-btn`).focus()
}

defineExpose({
  focus,
})
</script>

<template>
  <v-tooltip
    :id="`${id}-tooltip`"
    v-model="tooltipOpen"
    :aria-label="tooltip || label"
    location="top"
    v-bind="tooltipProps"
  >
    <template v-slot:activator="{ props }">
      <app-btn
        :id="id"
        :aria-label="tooltip || label"
        v-bind="{ ...props, ...btnProps, ...$attrs }"
      ></app-btn>
    </template>

    <slot v-if="$slots.tooltip" name="tooltip" />
    <span v-else>
      <span>{{ tooltip }}</span>
      <v-icon v-if="tooltipIcon" :size="18" class="ml-3">{{ tooltipIcon }}</v-icon>
    </span>
  </v-tooltip>
</template>
