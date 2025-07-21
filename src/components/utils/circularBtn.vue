<script setup>
import { computed } from 'vue'

const props = defineProps({
  text: {
    type: String,
    default: 'Click Here',
  },
  imageUrl: {
    type: String,
    default: '',
  },
  backgroundColor: {
    type: String,
    default: '#3498db', // Example blue
  },
  hoverColor: {
    type: String,
    default: '#2c3e50', // Example darker blue on hover
  },
  textColor: {
    type: String,
    default: 'white',
  },
  size: {
    type: String,
    default: '150px',
  },
  weight: {
    type: String,
    default: 'bold',
  },
})

const emit = defineEmits(['click']) //

const buttonStyle = computed(() => {
  console.log('props.imageUrl', props.imageUrl)
  return {
    width: props.size,
    height: props.size,
    weight: 'props.weight',
    backgroundColor: props.backgroundColor,
    backgroundImage: props.imageUrl ? `url('${props.imageUrl}')` : 'none',
    backgroundBlendMode: props.imageUrl ? 'multiply' : 'normal', // Blend color and image
  }
})
</script>
<template>
  <button class="circular-button mx-2" :style="buttonStyle" @click="emit('click')">
    <span>{{ text }}</span>
  </button>
</template>
<style scoped>
.circular-button {
  border-radius: 50%; /* Creates a perfect circle */
  background-size: cover; /* Ensures the image covers the button */
  background-position: center; /* Centers the image */
  background-repeat: no-repeat; /* Prevents image repetition */
  display: flex; /* Enables flexbox for centering */
  justify-content: center; /* Horizontally centers content */
  align-items: center; /* Vertically centers content */
  cursor: pointer; /* Indicates interactivity */
  border: none; /* Removes default button border */
  transition: background-color 0.3s ease; /* Smooth hover effect */
  /* CSS Variables for dynamic styling with v-bind() */
  --hover-bg-color: v-bind(hoverColor); /* */
  --text-color: v-bind(textColor);
}

.circular-button:hover {
  background-color: var(--hover-bg-color); /* Uses the CSS variable for hover color */
}

.circular-button span {
  color: var(--text-color); /* Uses the CSS variable for text color */
  font-family: Anton, sans-serif;
  font-size: 30px;
  letter-spacing: 3px;
  text-align: center;
  font-weight: v-bind(weight);
  z-index: 1; /* Ensures text is on top of the image and background */
}
</style>
