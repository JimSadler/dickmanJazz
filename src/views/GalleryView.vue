<script setup>
import { ref } from 'vue'

import { tbaBandGallery } from '@/services/constants.service.js'
</script>
<template>
  <v-container class="about">
    <v-row>
      <v-col v-for="(image, i) in tbaBandGallery" :key="i" cols="12" sm="6" md="4" lg="3">
        <div class="mx-2 my-3">
          <!--<v-hover v-slot="{ isHovering, props }">-->
          <!--<v-card class="circle-card">-->
          <v-img :lazy-src="image.src" :src="image.src" width="100%" cover>
            <!--<div-->
            <!--  v-if="isHovering"-->
            <!--  class="transition-fast-in-fast-out v-card&#45;&#45;reveal align-self-center"-->
            <!--  style="height: 100%"-->
            <!--&gt;-->
            <!--  {{ member.name }}, {{ member.role }}-->
            <!--</div>-->
          </v-img>
          <!--</v-card>-->
          <!--</v-hover>-->
        </div>
        <!--<v-img-->
        <!--  v-for="(img, i) in tbaBandGallery"-->
        <!--  :key="i"-->
        <!--  :lazy-src="img.src"-->
        <!--  :src="img.src"-->
        <!--  height="425px"-->
        <!--  aspect-ratio="1"-->
        <!--  class="bg-grey-lighten-2"-->
        <!--  cover-->
        <!--&gt;-->
        <!--  <template v-slot:placeholder>-->
        <!--    <v-row align="center" class="fill-height ma-0" justify="center">-->
        <!--      <v-progress-circular color="grey-lighten-5" indeterminate></v-progress-circular>-->
        <!--    </v-row>-->
        <!--  </template>-->
        <!--</v-img>-->
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
