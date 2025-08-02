<script setup>
import { watch } from 'vue'
import AppDialog from '@/components/dialog/AppDialog.vue'
import AppCard from '@/components/card/AppCard.vue'
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
  cardProps: {
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
  csms: {
    type: Boolean,
    default: false,
  },
})

const modelValue = defineModel()
const emit = defineEmits(['open', 'close'])

watch(
  () => modelValue.value,
  (value) => {
    if (value) {
      emit('open')
    } else {
      emit('close')
    }
  },
)
</script>

<template>
  <app-dialog
    :id="id"
    v-model="modelValue"
    :btnProps="btnProps"
    :scrollable="isScrollable"
    :showActivator="showActivator"
    :title="title"
    v-bind="$attrs"
    dialog-action-type=""
  >
    <!-- activator -->
    <template v-if="$slots.activator && showActivator" #activator="{ props }">
      <slot :props="props" name="activator" />
    </template>

    <!-- card -->
    <app-card :id="id" close-btn v-bind="cardProps" @close="modelValue = false">
      <!-- banner -->
      <template v-if="$slots.banner" #banner>
        <slot name="banner" />
      </template>

      <!-- header actions  -->
      <template v-if="$slots['header-actions']" #header-actions>
        <slot name="header-actions" />
      </template>

      <slot />

      <!-- footer actions -->
      <template v-if="$slots['footer-actions']" #footer-actions>
        <slot name="footer-actions" />
      </template>

      <!-- actions -->
      <template v-if="$slots.actions" #actions>
        <slot name="actions" />
      </template>
    </app-card>
  </app-dialog>
</template>
