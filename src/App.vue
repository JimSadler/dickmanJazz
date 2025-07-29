<script setup>
import { RouterView } from 'vue-router'
import Navigation from '@/components/utils/NavigationBar.vue'
import Footer from '@/components/utils/FooterBar.vue'
</script>

<template>
  <navigation />
  <main class="main-content">
    <RouterView style="height: 150px !important" />
  </main>
  <Footer />
</template>

<style>
header.v-toolbar {
  padding: 0 !important;
}
.v-toolbar__content {
  height: 150px !important;
  background: var(--color-background);
}
.main-content {
  min-height: calc(100vh - 150px);
  padding: 0;
}
</style>
