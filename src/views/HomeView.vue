<script setup></script>

<template>
  <!--<TheWelcome />-->
  <v-container fluid class="home1">
    <v-row class="justify-center mx-auto">
      <img
        class="bg-grey-lighten-2 home-hero"
        src="/band-gallery/tba-band-02.jpg"
        alt="TBA Band"
        loading="lazy"
      />
    </v-row>

    <!--<youtube-iframe :video-id="`8ZwrwdlxpXM`"></youtube-iframe>-->
  </v-container>
</template>
<style>
.home1 {
  min-height: 100vh;
  display: flex;
  align-items: center;
}
.home-hero {
  width: 100%;
  height: 100%;
  align-content: center;
  object-fit: cover;
  object-position: center;
}
</style>
