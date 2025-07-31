<script setup>
import { ref } from 'vue'

import { tbaBandGallery } from '@/services/constants.service.js'
import AppPage from '@/components/AppPage.vue'
</script>
<template>
  <app-page class="media-view text-white" title="Media">
    <template #page-heading>
      <v-container>
        <v-row class="pt-15">
          <v-col cols="12">
            <h1 class="text-h2 text-center">Gallery</h1>
          </v-col>
        </v-row>
      </v-container>
    </template>
    <template #page-body>
      <v-container class="gallery pt-15" fluid>
        <v-row class="px-15">
          <v-col
            v-for="(image, i) in tbaBandGallery"
            cols="12"
            sm="6"
            md="4"
            lg="2"
            class="d-flex justify-center align-center"
          >
            <v-img :lazy-src="image.src" :src="image.src" width="100%" cover />
          </v-col>
        </v-row>
      </v-container>
    </template>
  </app-page>
</template>

<style lang="scss" scoped>
.gallery {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100%;
  overflow-y: hidden !important;
  background-color: #333;
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
