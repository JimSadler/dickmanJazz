<script setup>
import Navigation from '@/components/utils/NavigationBar.vue'
import AppFooter from '@/components/page/AppFooter.vue'
</script>
<template>
  <v-app id="template">
    <!--<idle-timer />-->
    <!--<app-skip-focus />-->
    <!--<app-mode-banner />-->
    <!--<app-mode-overlay />-->
    <!--<app-side-navigation />-->
    <!--<app-nav-bar />-->
    <navigation />
    <router-view />
    <app-footer />
  </v-app>
</template>

<style lang="scss" scoped></style>
