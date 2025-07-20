<script setup>
import { RouterView } from 'vue-router'
import Navigation from '@/components/utils/NavigationBar.vue'
import Footer from '@/components/utils/FooterBar.vue'
</script>

<template>
  <navigation />
  <main>
    <RouterView style="height: 150px !important" />
  </main>
  <Footer />
</template>

<style>
header.v-toolbar {
  padding: 0 !important;
}
.v-toolbar__content {
  height: 300px !important;
  background: var(--color-background);
}
</style>
