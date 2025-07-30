<script setup>
import { RouterView } from 'vue-router'
import Navigation from '@/components/utils/NavigationBar.vue'
import Footer from '@/components/utils/FooterBar.vue'
</script>

<template>
  <router-view />
</template>

<style>
header.v-toolbar {
  padding: 0 !important;
}

.main-content {
  min-height: 100vh;
  padding: 0;
}
</style>
