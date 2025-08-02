<script setup>
import { exists } from '@/services/utils.service'
import AppText from '@/components/text/AppText.vue'
import AppBtnTooltip from '@/components/button/AppBtnTooltip.vue'
defineProps({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
  },
  subtitle: {
    type: String,
  },
  icon: {
    type: String,
  },
  iconColor: {
    type: String,
  },
  noPadding: Boolean,
  noMaxHeight: Boolean,
  loading: Boolean,
  primaryHeader: Boolean,

  error: {
    type: Object,
    default: null,
  },
  errorMessage: {
    type: String,
  },
  headerColor: {
    type: String,
    default: 'grey-lighten-5',
  },
  headerDivider: {
    type: Boolean,
    default: false,
  },
  headerElevation: {
    type: Number,
    default: 0,
  },
  headerTextColor: {
    type: String,
  },
  noHeader: Boolean,
  noCloseBtn: Boolean,
  borders: Boolean,
  smallHeaderText: Boolean,
  actionsNotFlex: Boolean,
})
const emit = defineEmits(['close'])

function onCloseClick() {
  emit('close')
}
</script>

<template>
  <v-card
    :id="`${id}-card`"
    :class="{
      noCloseBtn,
      noPadding,
      noHeader,
      borders,
      smallHeaderText,
      noMaxHeight,
      primaryHeader,
    }"
    class="lm-card"
    v-bind="$attrs"
  >
    <slot name="header-bar"></slot>

    <v-card-title
      :class="`bg-${headerColor} elevation-${headerElevation}`"
      class="d-flex align-center"
    >
      <!-- prepend icon -->
      <v-icon v-if="icon" :color="iconColor" :icon="icon" class="mr-2" size="24"></v-icon>

      <!-- title -->
      <div class="text-align-left">
        <app-text :color="headerTextColor" :text="title" block></app-text>

        <!-- subtitle -->
        <app-text
          v-if="subtitle"
          :text="subtitle"
          body="2"
          class="v-card-subtitle pa-0 mt-1"
        ></app-text>
      </div>

      <v-spacer></v-spacer>

      <!-- header actions -->
      <slot name="header-actions"></slot>

      <!-- close button -->
      <app-btn-tooltip
        v-if="!noCloseBtn"
        :id="`${id}-close`"
        :btn-props="{
          color: 'transparent',
          icon: 'mdi-close',
        }"
        :disabled="loading"
        aria-label="Close"
        tooltip="Close"
        @click="onCloseClick"
      />
    </v-card-title>
    <v-divider v-if="headerDivider"></v-divider>

    <!-- banner -->
    <slot name="banner"></slot>

    <!-- content -->
    <v-card-text v-if="$slots.default">
      <slot></slot>
    </v-card-text>

    <!-- footer -->

    <v-card-actions v-if="$slots.actions || exists(error)">
      <div class="w-100">
        <!-- footer actions -->
        <slot v-if="$slots['footer-actions']" name="footer-actions"></slot>

        <!-- errors -->
        <div v-if="exists(error)" class="mb-3">
          <slot v-if="$slots.error" :error="error" name="error"></slot>
          <app-alert-error v-else :id="id" :error="error" :message="errorMessage" />
        </div>

        <!-- actions -->
        <div class="w-100 d-flex justify-space-between">
          <slot name="actions"></slot>
        </div>
      </div>
    </v-card-actions>
  </v-card>
</template>
