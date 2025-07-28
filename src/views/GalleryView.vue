<script setup>
import { ref } from 'vue'

import { tbaBandGallery } from '@/services/constants.service.js'
</script>
<template>
  <v-container class="gallery">
    <v-row class="px-15">
      <v-col
        v-for="(image, i) in tbaBandGallery"
        cols="12"
        sm="6"
        md="4"
        lg="3"
        class="d-flex justify-center align-center"
      >
        <v-img :lazy-src="image.src" :src="image.src" width="85%" cover />
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.about {
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.v-card {
  transition: opacity 0.4s ease-in-out;
  &.circle-card {
    //border-radius: 50%;
    height: 340px;
    width: 340px;
  }
}
</style>
