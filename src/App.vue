<script setup>
import { RouterView } from 'vue-router'
import Navigation from '@/components/utils/NavigationBar.vue'
import Footer from '@/components/utils/FooterBar.vue'
</script>

<template>
  <router-view v-slot="{ Component, route }">
    <transition name="fade" mode="out-in">
      <component :is="Component" :key="route.path" />
    </transition>
  </router-view>
</template>

<style>
header.v-toolbar {
  padding: 0 !important;
}

.main-content {
  min-height: 100vh;
  padding: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
