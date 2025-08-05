<script setup>
import { computed } from 'vue'
import { defineProps } from 'vue'
const props = defineProps({
  text: [String, Number],
  body: [String, Number],
  header: String,
  subtitle: String,
  color: String,
  caption: Boolean,
  button: Boolean,
  overline: Boolean,
  block: Boolean,
  underline: Boolean,
  uppercase: Boolean,
  strikethrough: Boolean,
  noWrap: Boolean,
  breakWord: Boolean,
  italic: Boolean,
  html: Boolean,
  smallLetterSpacing: Boolean,
  lineClamp: [String, Number],
  lineHeight: [String, Number],
  weight: {
    type: String,
    validator: (value) => ['black', 'bold', 'medium', 'regular', 'light', 'thin'].includes(value),
  },
  align: {
    type: String,
    validator: (value) => ['left', 'center', 'right'].includes(value),
  },
})

const tag = computed(() => {
  if (props.header) return `h${props.header}`
  return 'span'
})

const textClass = computed(() => {
  let classes = []
  if (props.header) classes.push(`text-header-${props.header}`)
  else if (props.subtitle) classes.push(`text-subtitle-${props.subtitle}`)
  else if (props.body) classes.push(`text-body-${props.body}`)
  else if (props.caption) classes.push('text-caption')
  else if (props.overline) classes.push('text-overline')
  else if (props.button) classes.push('text-button')
  // istanbul ignore next
  else if (props.smallLetterSpacing) classes.push('text-small-letter-spacing')
  else classes.push('text-body-1')

  if (props.block) classes.push('d-block')
  if (props.align) classes.push(`text-${props.align}`)
  if (props.weight) classes.push('font-weight-' + props.weight)
  if (props.underline) classes.push('text-underline')
  if (props.uppercase) classes.push('text-uppercase')
  if (props.strikethrough) classes.push('text-strikethrough')
  if (props.noWrap) classes.push('text-prevent-line-breaks')
  if (props.italic) classes.push('font-italic')
  // istanbul ignore next
  if (props.breakWord) classes.push('text-break-word')
  if (props.lineClamp) classes.push('text-line-clamp text-line-clamp-' + props.lineClamp)
  if (props.color) classes.push(`text-${props.color}`)

  return classes.join(' ')
})

const textStyle = computed(() => {
  console.log('props.text', props.text)
  let styles = {}
  if (props.lineHeight) styles.lineHeight = props.lineHeight
  return styles
})
</script>

<template>
  <component :is="tag" :class="textClass" :style="textStyle">
    <slot />
    {{ text }}
  </component>
</template>
