<script setup>
import { ref } from 'vue'

const show = ref(false)
const icons = ref([
  {
    icon: 'mdi-facebook',
    color: '#0765FF',
    text: 'Facebook',
    class: 'facebook-btn',
    href: 'https://www.facebook.com/pages/TBA-Big-Band/124245024261090?fref=ts',
  },
  // {
  //   text: 'River City Rhythm Kings',
  //   href: 'http://www.rivercityrhythmkings.com/',
  //   class: 'river-city-rhythm',
  //   color: '#CDC973',
  // },
  // {
  //   icon: 'mdi-instagram',
  //   text: 'Instagram',
  //   color: '#0765FF',
  //   class: 'instagram-btn',
  //   href: 'https://www.instagram.com/tbabigband/',
  // },
  // {
  //   icon: 'mdi-youtube',
  //   text: 'YouTube',
  //   color: '#0765FF',
  //   class: 'youtube-btn',
  //   href: 'https://www.youtube.com/channel/UC1b2j0d9a6f8k4c7g3e4g0A',
  // },
])
</script>
<template>
  <!--<img-->
  <!--  src="/util/negative-space-rt.svg"-->
  <!--  alt="JS Development Logo"-->
  <!--  class="position-absolute mt-1"-->
  <!--  style="width: 25px"-->
  <!--/>-->
  <div class="d-flex flex-column mt-0 footer-container">
    <div class="bg-grey-darken-4 px-4 py-10">
      <div class="d-flex w-100 align-center">
        <img
          src="/public/TBA_logo.png"
          alt="TBA Big Band Home"
          class="mt-1"
          style="height: 10%; width: 10%"
        />
        <v-spacer></v-spacer>
        <!--<template v-slot:activator="{ props }">-->
        <!--  <app-btn-->
        <!--    :id="id"-->
        <!--    v-bind="{ ...props, ...btnProps, ...$attrs }"-->
        <!--    :aria-label="tooltip || label"-->
        <!--    @keydown.enter="focus"-->
        <!--    @keydown.space="focus"-->
        <!--    @blur="blur"-->
        <!--  ></app-btn>-->
        <!--</template>-->
        <v-tooltip text="River City Rhythm Kings Website" location="top">
          <template v-slot:activator="{ props }">
            <!--<v-btn v-bind="props">Hover Over Me</v-btn>-->
            <v-btn
              v-bind="props"
              href="https://www.rivercityrhythmkings.com/"
              size="large"
              class="river-city-rhythm"
            >
              <v-img width="100" src="/public/river-city-logo.png" alt="River City Rhythm Kings" />
            </v-btn>
          </template>
        </v-tooltip>
        <v-tooltip v-model="show" text="River City Rhythm Kings" location="top">
          <template v-slot:activator="{ props }"></template>
          <v-btn v-bind="props" href="http://www.rivercityrhythmkings.com/">
            <v-img
              src="/public/river-city-logo.png"
              alt="River City Rhythm Kings"
              class="animate__heartBeat"
            />
          </v-btn>
        </v-tooltip>
        <!--<img src="/public/river-city-logo.png" alt="" />-->
        <v-btn
          v-for="icon in icons"
          :key="icon"
          :text="icon.text"
          :prepend-icon="icon.icon"
          href="https://www.facebook.com/pages/TBA-Big-Band/124245024261090?fref=ts"
          target="_blank"
          density="comfortable"
          :class="icon.class"
          class="mx-4"
          size="x-large"
          variant="plain"
          :color="icon.color"
        ></v-btn>
      </div>
    </div>

    <div class="px-4 py-2 d-flex justify-space-between w-100">
      <div>
        all rights reserved, Mark Dickman
        <span>©</span>
        {{ new Date().getFullYear() }} - TBA Big Band
      </div>
      <div class="position-relative">
        <a href="https://jsdevelopment.io" target="_blank" class="text-grey developer_link">
          <v-icon size="x-small" class="spin-cog mr-1">mdi-cog</v-icon>
          <span class="text-caption">Website developed by</span>
          <span class="mr-1">
            <img
              src="/utils/negative-space-rt.svg"
              alt="JS Development Logo"
              class="position-absolute mt-0"
              style="width: 20px; top: 6px; right: 110px"
            />
            <strong class="ml-7 mt-n1 text-caption font-weight-bold">JS Development</strong>
          </span></a
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer-container {
  background: var(--color-background);
  color: white;
  box-shadow:
    0px 2px 4px -1px var(--v-shadow-key-umbra-opacity, rgba(0.2, 0, 0, 0)),
    0px 4px 5px 0px var(--v-shadow-key-penumbra-opacity, rgba(0.14, 0, 0, 0)),
    0px 1px 10px 0px var(--v-shadow-key-ambient-opacity, rgba(0.12, 0, 0, 0));
}
.spin-cog {
  animation: spin 2s linear infinite;
}
@-moz-keyframes spin {
  from {
    -moz-transform: rotate(0deg);
  }
  to {
    -moz-transform: rotate(360deg);
  }
}
@-webkit-keyframes spin {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.animate__heartBeat {
  animation: heartBeat 10s infinite;
}
.developer_link {
  text-decoration-color: transparent;
  text-decoration: underline;
  transition-timing-function: ease-in-out;
}
.developer_link:hover {
  transition-timing-function: ease-in-out;
  transition-duration: 0.5s !important;
  background-color: transparent;
  color: #41b783 !important;
  text-decoration-color: #41b783 !important;
}
.facebook-btn:hover {
  background-color: #0765ff;
  color: white !important;
  transition-timing-function: ease-in-out;
  transition-duration: 0.5s !important;
}
.river-city-rhythm:hover {
  background-color: #cdc973;
  color: #333 !important;
  transition-timing-function: ease-in-out;
  transition-duration: 0.5s !important;
}
</style>
