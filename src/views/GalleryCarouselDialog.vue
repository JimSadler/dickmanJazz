<script setup>
import { ref } from 'vue'
import AppDialogCard from '@/components/dialog/AppDialogCard.vue'
import { tbaBandGallery } from '@/services/constants.service.js'

const props = defineProps({
  image: Object,
  galleryImages: Array,
  index: Number,
})
const carouselIndex = ref(props.index)
const dialogValue = ref(false)
</script>
<template>
  <app-dialog-card
    id="gallery"
    title="TBA Big Band "
    :subtitle="`at ${props.image.location}`"
    v-model="dialogValue"
    width="1200"
    height="800"
  >
    <template #activator="{ props }">
      <img :alt="image.alt" v-bind="props" class="clickable-image" :src="image.src" width="100%" />
    </template>
    <div class="pa-4">
      <v-carousel v-model="carouselIndex" hide-delimiters>
        <v-carousel-item
          v-for="(img, index) in tbaBandGallery"
          :key="index"
          class="image-container"
        >
          <v-img :src="img.src" cover class="image"></v-img>
        </v-carousel-item>
      </v-carousel>
    </div>
  </app-dialog-card>
</template>

<style lang="scss" scoped>
img.clickable-image {
  float: left;
  width: 100%;
  perspective: 1000px; // Helps the jump in chrome
  backface-visibility: hidden; // Helps the jump in chrome
  transition:
    opacity 0.3s ease 0s,
    transform 0.3s ease 0s;
  transform: scale(1) rotate(0.001deg); // Deg helps the jump in FF
}

img.clickable-image:hover {
  filter: grayscale(100%);
  z-index: 10;
  transform: scale(1.1) rotate(0.001deg);
}
</style>
