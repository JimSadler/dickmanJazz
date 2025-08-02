<script setup>
import AppText from '@/components/text/AppText.vue'
import { defineProps } from 'vue'
import AppSpinner from '@/components/loading/AppSpinner.vue'
//istanbul ignore file
defineProps({
  id: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  variant: {
    type: String,
    default: 'flat',
    validator: (value) =>
      ['elevated', 'flat', 'tonal', 'outlined', 'text', 'plain'].includes(value),
  },
  color: {
    type: String,
    default: 'primary',
  },
  textColor: {
    type: String,
  },
  loading: Boolean,
  disabled: Boolean,
  prependIcon: String,
  icon: String,
  iconColor: String,
})
</script>

<template>
  <v-btn
    :id="`${id}-btn`"
    :aria-label="text"
    :class="textColor ? `text-${textColor}` : ''"
    :color="color"
    :disabled="disabled || loading"
    :icon="icon"
    :loading="loading"
    :prepend-icon="prependIcon"
    :text="text"
    class="lm-btn"
  >
    <template #loader>
      <app-spinner color="primary" size="18" width="2" />
    </template>
    <template v-if="prependIcon" v-slot:prepend>
      <v-icon :color="iconColor"></v-icon>
    </template>
  </v-btn>
</template>

<style lang="scss">
.lm-btn {
  &.bg-cta:not(.v-btn--disabled) {
    background: linear-gradient(
      0deg,
      rgb(var(--v-theme-green)) 5%,
      rgb(var(--v-theme-primary)) 95%
    ) !important;
    color: rgb(var(--v-theme-white)) !important;
  }
}
</style>
