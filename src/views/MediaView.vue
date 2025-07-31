<script setup>
import AppPage from '@/components/AppPage.vue'
import VuetifyAudio from 'vuetify3-audio-player'
import { tbaAudioMedia } from '@/services/constants.service.js'
</script>
<template>
  <app-page class="media-view text-white" title="Media">
    <template #page-heading>
      <v-container>
        <v-row class="pt-15">
          <v-col cols="12">
            <h1 class="text-h2 text-center">Media</h1>
          </v-col>
        </v-row>
      </v-container>
    </template>
    <template #page-body>
      <v-container class="media-view__content h-100">
        <v-row>
          <v-col cols="4" v-for="(audio, i) in tbaAudioMedia">
            <h2>{{ audio.title }}</h2>
            <vuetify-audio
              :file="audio.file"
              color="primary"
              :downloadable="true"
              :minimal="false"
              :autoPlay="false"
              :flat="false"
              :playbackSpeed="false"
              :loopable="false"
              :ended="onEnded"
              :canPlay="onCanPlay"
              playIcon="mdi-play"
              pauseIcon="mdi-pause"
              stopIcon="mdi-stop"
              refreshIcon="mdi-refresh"
              downloadIcon="mdi-download"
              volumeHighIcon="mdi-volume-high"
              volumeMuteIcon="mdi-volume-mute"
              variant="tonal"
            />
          </v-col>
        </v-row>
      </v-container>
    </template>
  </app-page>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
