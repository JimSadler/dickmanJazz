<script setup>
/*istanbul ignore file */
import AppText from '@/components/text/AppText.vue'

defineProps({
  color: {
    type: String,
    default: 'primary',
  },
  indeterminate: {
    type: Boolean,
    default: true,
  },
  width: {
    type: Number,
    default: 2,
  },
  size: {
    type: Number,
    default: 24,
  },
  loadingText: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <v-progress-circular
    :aria-label="loadingText"
    :color="color"
    :indeterminate="indeterminate"
    :size="size"
    :width="width"
  />
  <app-text body="1" class="ml-3" color="primary-darken-2" weight="bold">{{
    loadingText
  }}</app-text>
</template>
